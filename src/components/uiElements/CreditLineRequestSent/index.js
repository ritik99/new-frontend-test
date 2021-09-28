import React from 'react'
import { useState } from 'react'
import './style.css'


export default function CreditLineRequestSent({showDetailsSent, data, setShowClosingModal, setShowDetailsSent}) {
  
    const overlayClick = (event) => {
        event.preventDefault();
        if(event.target === event.currentTarget) {
            setShowDetailsSent(false)
        }
    }
    

    return (
        <React.Fragment>
        {showDetailsSent ?
            <div className="pageModalOverlay" onClick={(e)=>overlayClick(e)}>

                <div className="borrowPoolWindow">


                    <div className="borrowPoolStep">


                        <div className="CreditLineRequestSentHeader">
                            <div className="CreditLineRequestSentHeaderLeft">
                            {/* icon */}
                            </div>
                            <div className="CreditLineRequestSentHeaderRight1">
                                {data.username}
                            </div>
                            <div className="CreditLineRequestSentHeaderRight2">
                                {data.addr}
                            </div>
                        </div>

                      

                        <div className="sendCreditLineModalLinesWrapper">

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Credit Limit
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.creditLimit} />
                        </div>

                     
                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Borrow Asset
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.borrowAsset} />
             
                            </div>


                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                           Interest Rate
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.interestRate} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Ideal Collateral Ratio
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.idealCollateralRatio}  />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Collateral Asset
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.collateralAsset}  />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Liquidation Threshold
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.liquidationThreshold} />
                        </div>

                        <div className="sendCreditLineModalWrapper sendCreditLineModalWrapperBig">
                            <div className="sendCreditLineModalHint">
                            Autoliquidate
                            </div>
                            <input disabled type="text" className="sendCreditLineModalInput" value={data.autoliquidate} />
                        </div>


                        </div>

                        <div className="borrowPoolStepModalLineButton button" onClick={() => setShowClosingModal(true)}>
                            Cancel request
                        </div>
                        






                   </div>
                </div>

            </div>
            : null
        }
        
    </React.Fragment>
    )
}
