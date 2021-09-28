import { ethers } from "ethers";
import { getConfiguredAddress } from '../utility/functions'


// const addr = "0xEE10EBA99C5F55DbbEAFc73b4c65a4DB3F2674B7";
// const poolContract = require("../abi/pool.json");

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();



export async function tweetSign(from,user,setTweet){

    const msgParams = {
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
          ],
          Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' },
          ],
          Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' },
          ],
        },
        primaryType: 'Mail',
        domain: {
          name: 'Ether Mail',
          version: '1',
          chainId: '42',
          verifyingContract: getConfiguredAddress('verification'),
        },
        message: {
          sender: {
            name: user,
            wallet: from,
          },
          recipient: {
            name: 'Sublime',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
          },
          contents: 'Hello, sublime!',
        },
    }

    const signature = await window.ethereum.request({
        method: 'eth_signTypedData_v3',
        params: [from, JSON.stringify(msgParams)],
    })
    console.log('signature: ' + signature);

    setTweet("Please tweet :-"+"Verifying on Sublime @sublimefinance"+" "+"profile page"+" "+"addr:"+from+" "+"sig:"+signature)
    // console.log("Please tweet :-"+"Verifying on Sublime @sublimefinance"+"<br>"+"profile page"+"<br>"+"addr:"+from+"<br>"+"sig:"+signature)
    return
}


    
