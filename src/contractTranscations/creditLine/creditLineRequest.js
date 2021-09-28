import { ethers } from "ethers";

const creditLineAddress = "0xB642a5877Eb6511D75BdD0Bb9e4d31E251f99729";
const creditLineContract = require("../../abi/creditLine.json");


export async function requestCreditLineLender(
  lenderAddress,
  borrowLimit,
  liquidationThreshold,
  borrowRate,
  autoLiquidation,
  collateralRatio,
  borrowAsset,
  collateralAsset
) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  var contract = new ethers.Contract(creditLineAddress, creditLineContract, provider);
  console.log("contract: ", contract);
  let balance = await signer.getBalance();
  console.log("balance: ", balance);
  contract = contract.connect(signer);
  // let borrower = await signer.getAddress();
  // console.log("borrower: ", borrower);

  const borrowerTransactionConfig = {
    // from: borrower,  // not required, automatically takes signer's account address
    gasPrice: "1000000000",
  };
  const res = await contract.requestCreditLineToLender(lenderAddress, borrowLimit, liquidationThreshold, borrowRate, autoLiquidation, collateralRatio, borrowAsset, collateralAsset, borrowerTransactionConfig);
  console.log("res: ", res);
  const txn = await res.wait();
  console.log("txn: ", txn);
  // await contract.functions
  //   .requestCreditLineToLender(
  //     lenderAddress,
  //     borrowLimit,
  //     liquidationThreshold,
  //     borrowRate,
  //     autoLiquidation,
  //     collateralRatio,
  //     borrowAsset,
  //     collateralAsset,
  //     borrowerTransactionConfig
  //   )
  //   .then(console.log);
  return txn.transactionHash;
}
