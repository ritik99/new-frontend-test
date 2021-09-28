import React, { useEffect, useState } from 'react'
import './style.css'

import Data from '../../../etc/data.json'

export default function RepayModal({showRepayModal, setShowRepayModal}) {

    const [repayAmount, setRepayAmount] = useState(0)

    const repayFunc = () => {
        alert("Repay Func")
        setShowRepayModal(false)
    }


    return (
        <React.Fragment>
            {showRepayModal ? 
            <div className="pageModalOverlay">
                <div className="borrowPoolWindow">
                    <div className="borrowPoolWindowHeader">
                        Repay
                        <div className="borrowPoolWindowHeaderButton" onClick={() => setShowRepayModal(false)}></div>
                    </div>
                    <div className="borrowPoolStep">
                        <div className="borrowPoolStepModalLine">
                            <div className="borrowPoolStepModalLineHint">Interest Due this interval</div>
                            <div className="borrowPoolStepModalLineValue">{Data.repayModal.interestDueInterval}</div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                            <div className="borrowPoolStepModalLineHint">Interest Repayment Left</div>
                            <div className="borrowPoolStepModalLineValue">{Data.repayModal.interestRepaymentLeft}</div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                        <div className="borrowPoolStepHint">How much would you like to repay?</div>
                        <div className="borrowPoolStepModalAmount">
                            <div className="borrowPoolStepModalAmountTop">
                                <div className="borrowPoolStepModalAmountTopLeft">
                                    Amount
                                </div>
                            </div>
                            <div className="borrowPoolStepModalAmountBottom">
                                <div className="borrowPoolStepModalAmountBottomLeft">
                                <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Enter the Amount" onChange={e => setRepayAmount(e.target.value)} value={repayAmount} />
                                </div>
                                <div className="borrowPoolStepModalAmountBottomRight">
                                        {Data.repayModal.repayAsset}
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2 borrowPoolStepModalLine3">
                            <div className="borrowPoolStepModalLineHint">New balance owed</div>
                            <div className="borrowPoolStepModalLineValue">{Data.repayModal.newBalanceOwed}</div>
                        </div>
                        <div className="borrowPoolStepModalLineButton button" onClick={repayFunc}>
                            Repay
                        </div>
                    </div>
                </div>
            </div>
            :null}            
        </React.Fragment>
    )
}
