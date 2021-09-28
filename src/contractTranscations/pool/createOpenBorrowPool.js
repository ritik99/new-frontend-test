import { BigNumber, ethers } from "ethers";
import { getConfiguredAddress } from '../../utility/functions'
import Web3 from "web3"
import { getGlobalPoolDetail } from '../../query/pool/globalPoolDetails';

const poolContract = require("../../abi/poolFactory.json");
const ecr20abi = require("../../abi/erc20.json");
const poolContractMeta = require("../../abi/artifacts/contracts/Pool/Pool.sol/Pool.json");
const proxyMeta = require("../../abi/artifacts/contracts/Proxy.sol/SublimeProxy.json");

const _interface = new ethers.utils.Interface(poolContractMeta.abi);
const initializeFragement = _interface.getFunction("initialize");
const web3 = new Web3(Web3.givenProvider);

const getSalt = (address, salt) => {
  const res = ethers.utils.solidityKeccak256(['bytes32', 'address'], [salt, address]);
  return res
}

const getInitCodehash = (
  proxyBytecode,
  poolImplAddr,
  poolData,
  admin
) => {
  const initialize = ethers.utils.defaultAbiCoder.encode(
    ["address", "address", "bytes"],
    [poolImplAddr, admin, poolData]
  );
  const encodedData = proxyBytecode + initialize.replace("0x", "");
  return ethers.utils.keccak256(encodedData);
}

const getPoolAddress = (
  borrower,
  token1,
  token2,
  strategy,
  poolFactory,
  salt,
  poolLogic,
  transferFromSavingsAccount,
  collateralRatio,
  borrowRate,
  repaymentPeriodInSeconds,
  noOfRepaymentIntervals,
  initialCollateralDeposit,
  poolSize,
  minborrowAmount,
  matchCollateralRatioInterval,
  collectionPeriod,
) => {

  const poolData = _interface.encodeFunctionData(initializeFragement, [
    poolSize, // _poolSize,
    minborrowAmount, // _minborrowAmount,
    borrower,
    token1,
    token2,
    collateralRatio, // _collateralRatio
    borrowRate, // _borrowRate
    repaymentPeriodInSeconds, // _repaymentInterval
    noOfRepaymentIntervals, // _noOfRepaymentIntervals
    strategy,
    initialCollateralDeposit, // _collateralAmount
    transferFromSavingsAccount,
    matchCollateralRatioInterval, // _matchCollateralRatioInterval
    collectionPeriod, // _collectionPeriod
  ]);

  console.log('poolData', poolData, poolFactory, getSalt(borrower, salt));

  const poolAddress = ethers.utils.getCreate2Address(
    poolFactory,
    getSalt(borrower, salt),
    getInitCodehash(
      proxyMeta.bytecode,
      poolLogic,
      poolData,
      "0x0000000000000000000000000000000000000001"
    )
  );
  return poolAddress;
}

const onCreatePool = (hash, callback) => {
  const onCreateInterval = setInterval(async () => {
    web3.eth.getTransactionReceipt(hash).then((txReceipt) => {
      if (txReceipt?.status === true) {
        clearInterval(onCreateInterval);

        console.log('true TXRECEIPT', txReceipt);
        callback({ success: true });
      } else if (txReceipt?.status === false) {
        console.log('false TXRECEIPT', txReceipt);
      }
    });
  }, 5000);
}

export async function createOpenBorrowPool(depositData, callback) {
  const onSuccess = async (poolDetails) => {
    try {
      const { collectionPeriod, matchCollateralRatioInterval } = poolDetails;

      const timestamp = new Date().getTime();
      const address = await window.sessionStorage.getItem("address");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const chainId = provider.provider["networkVersion"]

      const poolFactory = getConfiguredAddress('poolFactory');
      const poolLogic = getConfiguredAddress('pool');

      const signer = provider.getSigner();

      var contract = new web3.eth.Contract(poolContract, poolFactory);
      var erc20contract = new web3.eth.Contract(ecr20abi, depositData.CollateralToken);

      let numberOfSecondsInWeek = 60*60*24*7;
      let repaymentPeriodInSeconds = (parseInt((depositData.repaymentPeriod.split(" "))[0],10)*numberOfSecondsInWeek).toString()
      let balance = await signer.getBalance();
      // contract = contract.connect(signer);
      let borrower = await signer.getAddress();
      let borrowAmount = ((depositData.borrowAmount.toString())).toString()
      var minborrowAmount = (60 / 100) * borrowAmount;
      let collateral = Number(depositData.requiredCollateral).toFixed(18)
      let initialCollateralDeposit = (ethers.utils.parseUnits(collateral.toString())).toString()

      const loanPeriodInSeconds = (parseInt((depositData.loanPeriod.split(" "))[0],10)*numberOfSecondsInWeek).toString()
      const noOfRepaymentIntervals = Math.ceil(loanPeriodInSeconds/repaymentPeriodInSeconds).toString()
      const collateralRatio = (depositData.collaterizationRatio)*(10**8)
      const borrowRate = (depositData.interestRate*(10**8)).toString()
      const salt = ethers.utils.formatBytes32String(timestamp.toString())

      const poolAddress = await getPoolAddress(
        address,
        depositData.borrowToken,
        depositData.CollateralToken,
        "0x0000000000000000000000000000000000000000",
        poolFactory,
        salt,
        poolLogic,
        false,
        collateralRatio,
        borrowRate,
        repaymentPeriodInSeconds,
        noOfRepaymentIntervals,
        initialCollateralDeposit,
        borrowAmount,
        minborrowAmount,
        matchCollateralRatioInterval,
        collectionPeriod
      )

      localStorage.setItem('poolAddress', poolAddress);

      console.log('borrowToken', depositData.borrowToken);
      console.log('CollateralToken', depositData.CollateralToken);
      console.log('poolAddress', poolAddress);
      console.log('salt in createPool', salt);
      const amount = BigNumber.from(initialCollateralDeposit); // static 185014322501600

      await erc20contract.methods.approve(
        poolAddress,
        amount
      ).send({ from: address }, async (error, receipt) => {
        if (error) {
          callback({ error: true, message: error.message });
          return
        }

        const interval = setInterval(async () => {

          web3.eth.getTransactionReceipt(receipt).then(async (txReceipt) => {
            if (txReceipt?.status === true) {
              clearInterval(interval);

              const isAllowed = await erc20contract.methods.allowance(address, poolAddress).call()
              console.log('isAllowed', isAllowed);

              await contract.methods.createPool(
                borrowAmount, // pool size
                minborrowAmount,
                depositData.borrowToken,
                depositData.CollateralToken,
                collateralRatio,
                borrowRate,
                repaymentPeriodInSeconds,
                noOfRepaymentIntervals,
                "0x0000000000000000000000000000000000000000",
                initialCollateralDeposit,
                false,
                salt,
                // borrowerTransactionConfig
              ).send({ from: address }, function async(err, res) {
                if (err) {
                  callback({ error: true, message: err.message });
                  return
                }
                if (res) {
                  console.log('HASH', res);
                  onCreatePool(res, callback)
                }
              })
            } else if (txReceipt?.status === false) {
              console.log('approve false TXRECEIPT', txReceipt);
            }
          });
        }, 5000);
      });

    } catch (error) {
      if (error.message.includes('User denied transaction')) {
        callback({ error: true, message: error.message });
      } else {
        callback({ error: true, message: 'Invalid values entered.' });
      }
    }
  }

  await getGlobalPoolDetail(onSuccess, callback);
}
