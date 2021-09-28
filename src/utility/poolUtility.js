import {ethers} from 'ethers'

export function calculateRepayment(borrowAmount, interestRate, loanperiod, repaymentPeriod){

    if(interestRate == null || interestRate != parseInt(interestRate, 10)){
      return [0,0,0]
    }
    console.log(interestRate)
    const oneDay = 24 * 60 * 60 * 1000;
    let loanperiodInSeconds = parseInt((loanperiod.split(" "))[0]*7,10)
    let noOfRepaymentIntervals = Math.ceil(loanperiodInSeconds/parseInt((repaymentPeriod.split(" "))[0]*7,10)).toString()
    console.log(loanperiodInSeconds, noOfRepaymentIntervals)
    // let borrowAmount*interestRate*/100
    borrowAmount = ethers.utils.parseUnits(borrowAmount)
    let totalInterest = borrowAmount.mul(interestRate).mul(loanperiodInSeconds).div(36500)
    let totalRepayment = borrowAmount.add(totalInterest)
    let eachInstallment = totalInterest.div(noOfRepaymentIntervals)
    return [ethers.utils.formatUnits(totalInterest),ethers.utils.formatUnits(totalRepayment),ethers.utils.formatUnits(eachInstallment)]
  }