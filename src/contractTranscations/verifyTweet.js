// import  { useState, useEffect, useCallback } from 'react'

import { recoverPersonalSignature,recoverTypedSignature } from 'eth-sig-util'
import { ethers } from 'ethers'
import request from 'request';






export async function verification(tweetID,account,setVeficationDone,user) {

    // console.log(account,user)
    // const msgParams = {
    //     types: {
    //       EIP712Domain: [
    //         { name: 'name', type: 'string' },
    //         { name: 'version', type: 'string' },
    //         { name: 'chainId', type: 'uint256' },
    //         { name: 'verifyingContract', type: 'address' },
    //       ],
    //       Person: [
    //         { name: 'name', type: 'string' },
    //         { name: 'wallet', type: 'address' },
    //       ],
    //       Mail: [
    //         { name: 'from', type: 'Person' },
    //         { name: 'to', type: 'Person' },
    //         { name: 'contents', type: 'string' },
    //       ],
    //     },
    //     primaryType: 'Mail',
    //     domain: {
    //       name: 'Ether Mail',
    //       version: '1',
    //       chainId: '42',
    //       verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    //     },
    //     message: {
    //       sender: {
    //         name: user,
    //         wallet: account,
    //       },
    //       recipient: {
    //         name: 'Sublime',
    //         wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    //       },
    //       contents: 'Hello, sublime!',
    //     },
    // }

    var options = {
        'method': 'GET',
        'url': `https://ahpefvh9l7.execute-api.us-east-1.amazonaws.com/default/tweet-verification?tweetId=${tweetID}&account=${account}`,
    }   
    request(options, async function(error, response) {
        if (error){
          alert('you have not been verified.')
        }
        else{
          if(response.statusCode == 200){
            setVeficationDone(true)
            alert('you have been verified.') 
            return true           
          }

        }
    });

   
  }
  