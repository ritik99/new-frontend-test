import { ethers } from "ethers";
import { getConfiguredAddress } from '../utility/functions'

const savingsAccount = getConfiguredAddress('savingsAccount');
const savingsContract = require("../abi/savingsAccount.json");

export async function depositTo(amount, address){

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  console.log(amount,address);
  let newAmount = (ethers.utils.parseUnits(amount.toString())).toString()
  var contract = new ethers.Contract(savingsAccount, savingsContract, provider);

  contract = contract.connect(signer);
  let borrower = await signer.getAddress();

  await contract.functions
  .depositTo(
    address,newAmount
  ).then(console.log);
}
