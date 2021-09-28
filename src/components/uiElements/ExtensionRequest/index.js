import React from 'react'
import { useState } from 'react'
import './style.css'

export default function ExtensionRequest() {

    const [ notificationState, setNotificationState ] = useState(4)



    const [ extensionRequestAvailable , setExtensionRequestAvailable ] = useState("00:00 00-00-0000")
    const requestExtension = () => {
        console.log("requestExtension")
    }


    const [ collateralRatio , setCollateralRatio ] = useState("0.00%")
    const [ currentCollateralRatio , setcurrentCollateralRatio ] = useState("10.00%")
    const executeMarginCall = () => {
        console.log("executeMarginCall")
    }


 

    const [ lendersAmount , setLendersAmount ] = useState(12)
    const [ tokensAmount , setTokensAmount ] = useState(20)
    const [earliestMarginCall, setEarliestMarginCall] = useState("00:00 00-00-0000")
    const showAll = () => {
        console.log("showAll")
    }

   

    const [ marginCallFrom , setMarginCallFrom ] = useState('Abc')
    const [ putTokenAmount , setPutTokenAmount ] = useState(35)
    const [marginCallExecutes, setMarginCallExecutes] = useState("00:00 00-00-0000")
    const [ extraCollateralRequired , setExtraCollateralRequired ] = useState(0.2)
    const addMoreCollateral = () => {
        console.log("addMoreCollateral")
    }


    const [ username , setUsername ] = useState('Gerge Brown')
    const [shortAddr, setShortAddr] = useState('0x81fA3210...')


    return (
        <React.Fragment>

            {
                notificationState === 1 ? 
                <div className="loanDetailsRepayArea">

                <div className="loanDetailsRepayAreaTitle">
                Request for an extension
                </div>

                <div className="loanDetailsRepayAreaButton button" onClick={requestExtension} >
                Request Extension
                </div>

                <div className="loanDetailsRepayAreaDescription">
                Request available till {extensionRequestAvailable}
              
                </div>



                <div className="loanDetailsRepayAreaSpacerLine">
                    
                </div>

                <div className="loanDetailsRepayAreaWarning">

                    <div className="loanDetailsRepayAreaWarningIcon icon">
                    
                    </div>

                    You have one extension request available. Once requested, lenders will cast
their votes till the end of voting period.
                </div>

                </div>
                :
                null
            }


            {
                notificationState === 2 ? 
                <div className="loanDetailsRepayArea">

                <div className="loanDetailsRepayAreaTitle">
                Execute margin call
                </div>

                <div className="loanDetailsRepayAreaButton button" onClick={executeMarginCall} >
                Execute margin call
                </div>

                <div className="loanDetailsRepayAreaDescription">
                Margin call available if collateral ratio is below {collateralRatio} (Current collateral ratio: {currentCollateralRatio})
              
                </div>



                <div className="loanDetailsRepayAreaSpacerLine">
                    
                </div>

                <div className="loanDetailsRepayAreaWarning">

                    <div className="loanDetailsRepayAreaWarningIcon icon">
                    
                    </div>

                    Once the margin call is executed, {collateralRatio} needs to post more collateral before {collateralRatio} such that their collateral ratio is above {currentCollateralRatio}

                </div>

                </div>
                :
                null
            }

            {
                notificationState === 3 ? 
                <div className="loanDetailsRepayArea">

                <div className="loanDetailsRepayAreaTitle">
                Fulfil margin calls
                </div>

                <div className="loanDetailsRepayAreaButton button" onClick={showAll} >
               Show all
                </div>

                <div className="loanDetailsRepayAreaDescription">
                You have margin calls from { lendersAmount } lenders requiring you to put { tokensAmount } tokens as collateral. The earliest margin call executes in { earliestMarginCall } time
              
                </div>



                <div className="loanDetailsRepayAreaSpacerLine">
                    
                </div>

                <div className="loanDetailsRepayAreaWarning">

                    <div className="loanDetailsRepayAreaWarningIcon icon">
                    
                    </div>

                    If a margin call is executed, collateral backing that lender is liquidated and transferred to the lender.

                </div>

                </div>
                :
                null
            }

            {
                notificationState === 4 ? 
                <div className="loanDetailsRepayArea">

                <div className="loanDetailsRepayAreaTitle">
                Fulfil margin call
                </div>

                <div className="loanDetailsRepayAreaButton button" onClick={() => setNotificationState(5) } >
               Add more collateral 
                </div>

                <div className="loanDetailsRepayAreaDescription">
                You have a margin call from { marginCallFrom } requiring you to put { putTokenAmount } tokens as collateral.
                The margin call executes in { marginCallExecutes } time
                </div>



                <div className="loanDetailsRepayAreaSpacerLine">
                    
                </div>

                <div className="loanDetailsRepayAreaWarning">

                    <div className="loanDetailsRepayAreaWarningIcon icon">
                    
                    </div>

                    If a margin call is executed, collateral backing that lender is liquidated and transferred to the lender.
                    <br />
                    Extra collateral required: { extraCollateralRequired } ETH
                </div>

                </div>
                :
                null
            }

{
                notificationState === 5 ? 
                <div className="loanDetailsRepayArea">

                <div className="loanDetailsRepayAreaTitle">
                {username}
                </div>

                <div className="loanDetailsRepayAreaButton button" onClick={addMoreCollateral } >
               Add more collateral 
                </div>

                <div className="loanDetailsRepayAreaDescription">
                {shortAddr}
                </div>



                <div className="loanDetailsRepayAreaSpacerLine">
                    
                </div>

                <div className="loanDetailsRepayAreaWarning">

                    <div className="loanDetailsRepayAreaWarningIcon icon">
                    
                    </div>

           
                    Extra collateral required: { extraCollateralRequired } ETH
                </div>

                </div>
                :
                null
            }

        </React.Fragment>
    )
}
