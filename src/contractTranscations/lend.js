import { ethers } from "ethers";
import Web3 from "web3"

const poolContract = require("../abi/pool.json");
const ecr20abi = require("../abi/erc20.json");
const web3 = new Web3(Web3.givenProvider);

const onLendingSuccess = (hash, callback) => {
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

export async function lend(amount, poolAddress, tokenAddress, callback){
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let lender = await signer.getAddress();

  let newAmount = (ethers.utils.parseUnits(amount.toString())).toString()

  var contract = new web3.eth.Contract(poolContract, poolAddress);
  var erc20contract = new web3.eth.Contract(ecr20abi, tokenAddress);

  try {
    await erc20contract.methods.approve(
      poolAddress,
      newAmount
    ).send({ from: lender }, async (error, receipt) => {
      if (error) {
        console.log('APPROVE ERROR', error);
        callback({ error: true, message: error.message });
        return
      }
  
      const interval = setInterval(async () => {
        web3.eth.getTransactionReceipt(receipt).then(async (txReceipt) => {
          if (txReceipt?.status === true) {
            clearInterval(interval);
    
            const isAllowed = await erc20contract.methods.allowance(lender, poolAddress).call()
            console.log('isAllowed', isAllowed);
            await contract.methods.lend(lender, newAmount, false).send({ from: lender }, function async(err, res) {
              if (err) {
                console.log('LEND ERROR', err);
                callback({ error: true, message: err.message });
                return
              }
              if (res) {
                console.log('LEND HASH', res);
                onLendingSuccess(res, callback)
              }
            })
    
          } else if (txReceipt?.status === false) {
            console.log('approve false TXRECEIPT', txReceipt);
          }
        });
      }, 5000)
    }); 
  } catch (error) {
    if (error.message.includes('User denied transaction')) {
      callback({ error: true, message: error.message });
    } else {
      callback({ error: true, message: 'Invalid values entered.' });
    }
  }
}
