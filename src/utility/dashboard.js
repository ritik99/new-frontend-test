
import request from 'request'
// const Web3 = require("web3");
import Web3 from "web3"
const web3 = new Web3("https://kovan.infura.io/v3/9dc997986f8840daa0e6ccb1d8d0d757");
const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];


// const request = require('request')
export function getTotalBorrowedAmount(address,setTotalBorrowAmount){


    const data = JSON.stringify({
        query: `{
            pools(where:{borrower:"${address}",loanStatus:"Active"}) {
              id
              borrowAmountRequested
              borrowAsset
              
            }
          } 
          `
    })
    var options = {
        'method': 'POST',
        'url': 'https://api.thegraph.com/subgraphs/name/sublime-finance/sublime',
        'headers': {'Content-Type': 'application/json'},
        'body': data
    }       


    request(options, async function (error, response) {

        if (error) throw new Error(error); 
        var body = JSON.parse(response.body)
        let totalBorrow = 0;
        if(body){
            if(body.data){
                if(body.data.pools && body.data.pools.length>0){
                    for(var pool=0;pool<body.data.pools.length;pool++){
                        let addr;
                        if(body.data.pools[pool].borrowAsset = "0x0000000000000000000000000000000000000000"){
                            addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"
                        }
                        const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
                        let roundData =  ((await priceFeed.methods.latestRoundData().call()).answer)/10**8;
                        console.log(roundData);
                        totalBorrow += roundData*(parseInt(body.data.pools[pool].borrowAmountRequested)/10**18)
                    }

                }
            }
        }
        setTotalBorrowAmount(totalBorrow);
        
    })

}

export function getBorrowRate(address,setTotalBorrowRate){

    const data = JSON.stringify({
        query: `{
            pools(where:{borrower:"${address}",loanStatus:"Active"}) {
                borrowRate
            }
          } 
          `
    })
    var options = {
        'method': 'POST',
        'url': 'https://api.thegraph.com/subgraphs/name/sublime-finance/sublime',
        'headers': {'Content-Type': 'application/json'},
        'body': data
    }       

    request(options, async function (error, response) {

        if (error) throw new Error(error); 
        var body = JSON.parse(response.body)
        let totalBorrowRate = 0;
        if(body){
            if(body.data){
                if(body.data.pools && body.data.pools.length>0){
                    for(var pool=0;pool<body.data.pools.length;pool++){
                        totalBorrowRate= totalBorrowRate + parseInt(body.data.pools[pool].borrowRate);
                    }
                    if(body.data.pools.length == 0){
                        setTotalBorrowRate(0);
                    }
                    else{
                        setTotalBorrowRate(totalBorrowRate/body.data.pools.length);
                    }

                }
            }
        }
        
        
        // console.log(totalBorrowRate,body.data.pools.length);

    })

}

export function getTotalLendAmount(address,setTotalLendAmount){

    
    console.log("working")
    const data = JSON.stringify({
        query: `{
            lendingDetailscopies(where:{lender:"${address}",loanStatus:"Active"}){
             id
             AmountLend
             pool{
                borrowAsset
              }
           }
           }            
          `
    })
    var options = {
        'method': 'POST',
        'url': 'https://api.thegraph.com/subgraphs/name/sublime-finance/sublime',
        'headers': {'Content-Type': 'application/json'},
        'body': data
    }       


    request(options, async function (error, response) {

        if (error) throw new Error(error); 
        var body = JSON.parse(response.body)
        let totalLend = 0;
        if(body){
            if(body.data){
                console.log(body.data)
                if(body.data.lendingDetailscopies && body.data.lendingDetailscopies.length>0){
                    for(var i=0;i<body.data.lendingDetailscopies.length;i++){
                        let addr;
                        if(body.data.lendingDetailscopies[i].pool.borrowAsset = "0x0000000000000000000000000000000000000000"){
                            addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"
                        }
                        const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
                        let roundData =  ((await priceFeed.methods.latestRoundData().call()).answer)/10**8;
                        
                        totalLend += roundData*(parseInt(body.data.lendingDetailscopies[i].AmountLend)/10**18)
                    }
                    if(body.data.lendingDetailscopies.length == 0){
                        setTotalLendAmount(0);
                    }
                    else{
                        setTotalLendAmount(totalLend);
                    }

                }
            }
        }
      
        
    })

}


export function getLendRate(address,setTotalLendRate){

    const data = JSON.stringify({
        query: `{
            pools(where:{borrower:"${address}",loanStatus:"Active"}) {
                borrowRate
            }
          } 
          `
    })
    var options = {
        'method': 'POST',
        'url': 'https://api.thegraph.com/subgraphs/name/sublime-finance/sublime',
        'headers': {'Content-Type': 'application/json'},
        'body': data
    }       

    let s = 0

    request(options, async function (error, response) {
        
        if (error) throw new Error(error); 
        var body = JSON.parse(response.body)
        let totalBorrowRate = 0;
        if(body){
            if(body.data){
                if(body.data.pools && body.data.pools.length>0){
                    for(var pool=0;pool<body.data.pools.length;pool++){
                        totalBorrowRate= totalBorrowRate + parseInt(body.data.pools[pool].borrowRate);
                    }
                    if(body.data.pools.length == 0){
                        setTotalLendRate(0);
                    }
                    else{
                        setTotalLendRate((1-s)*totalBorrowRate/body.data.pools.length);
                    }

                }
            }
        }
        
        
        // console.log(totalBorrowRate,body.data.pools.length);

    })

}


// getTotalBorrowedAmount("0x5a8043a7907c3a5c40ae52cff3abc026111ccd96")
// getBorrowRate("0x5a8043a7907c3a5c40ae52cff3abc026111ccd96")
