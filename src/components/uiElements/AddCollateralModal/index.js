import React from 'react'
import { useState,useEffect  } from 'react'
import './style.css'
import Data from '../../../etc/data.json'




export default function AddCollateralModal({showAddCollateralModal, setShowAddCollateralModal}) {

    const [collateralAmount, setCollateralAmount] = useState(0)

    const addCollateralFunc = () => {
        alert('addCollateralFunc')
        setShowAddCollateralModal(false)
    }

    return (
        <React.Fragment>
            {showAddCollateralModal ?
            <div className="pageModalOverlay">
                <div className="borrowPoolWindow">
                    <div className="borrowPoolWindowHeader">
                        Provide more collateral
                        <div className="borrowPoolWindowHeaderButton" onClick={() => setShowAddCollateralModal(false)}>
                        </div>
                    </div>
                    <div className="borrowPoolStep">
                        <div className="borrowPoolStepModalLine">
                                <div className="borrowPoolStepModalLineHint">Borrowed amount</div>
                                <div className="borrowPoolStepModalLineValue">{Data.addCollateralModal.borrowAmount}</div>
                        </div>
                        <div className="borrowPoolStepModalLine">
                                <div className="borrowPoolStepModalLineHint">Locked Collateral</div>
                                <div className="borrowPoolStepModalLineValue">{Data.addCollateralModal.lockedCollateral}</div>
                        </div>
                        <div className="borrowPoolStepModalLine borrowPoolStepModalLine2">
                                <div className="borrowPoolStepHint">How much collateral would you like to provide?</div>
                                <div className="borrowPoolStepModalAmount">
                                    <div className="borrowPoolStepModalAmountTop">
                                        <div className="borrowPoolStepModalAmountTopLeft">
                                            Amount
                                        </div>
                                    </div>
                                    <div className="borrowPoolStepModalAmountBottom">
                                        <div className="borrowPoolStepModalAmountBottomLeft">
                                            <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Enter the Amount" onChange={e => setCollateralAmount(e.target.value)} value={collateralAmount} />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="borrowPoolStepModalLine borrowPoolStepModalLine2 borrowPoolStepModalLine3">
                                    <div className="borrowPoolStepModalLineHint">New locked collateral</div>
                                    <div className="borrowPoolStepModalLineValue">{Data.addCollateralModal.newLockedCollateral}</div>
                                </div>
                            
                            <div className="borrowPoolStepModalLineButton button" onClick={addCollateralFunc} >
                                Provide Collateral
                            </div>                    
                    </div>
                </div>
            </div>
            :null}
        </React.Fragment>
    )
}
