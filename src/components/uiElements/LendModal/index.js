import React, { useEffect, useState } from 'react'
import './style.css'

import Data from '../../../etc/data.json'


export default function LendModal({showLendModal, setShowLendModal}) {

    const [lendAmount, setLendAmount] = useState(0)

    
    const lendFunc = () => {
        alert("lendFunc");
        setShowLendModal(false)
    }


    return (
        <React.Fragment>

            {showLendModal ? 
            <div className="pageModalOverlay">

                <div className="lendPoolWindowSmaller">

                    <div className="lendPoolWindowHeader">
                        Lend

                        <div className="lendPoolWindowHeaderButton" onClick={() => setShowLendModal(false)}>

                        </div>
                    </div>
                    <div className="lendPoolStep">
                        <div className="lendDetailsOwnerLineModal">

                            <div className="lendDetailsOwnerLineLeft">

                                <div className="lendDetailsOwnerIcon"></div>
                                <div className="lendDetailsOwnerName">{Data.lendModal.name}</div>
                                <div className="lendDetailsOwnerUsername">{Data.lendModal.username}</div>

                            </div>

                            <div className="lendDetailsOwnerLineRight">

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusOrange">
                                {Data.lendModal.poolStatus}
                                </div>

                                

                

                            </div>

                            </div>
                        <div className="lendPoolStepModalLine">
                            <div className="lendPoolStepModalLineHint">Lend Rate</div>
                            <div className="lendPoolStepModalLineValue">{Data.lendModal.lendRate}</div>
                        </div>
                        <div className="lendPoolStepModalLine lendPoolStepModalLine2">
                            <div className="lendPoolStepModalLineHint">Maximum you can lend</div>
                            <div className="lendPoolStepModalLineValue">{Data.lendModal.maximumLend}</div>
                        </div>
                        <div className="lendPoolStepModalLine borrowPoolStepModalLine3">
                            <div className="lendPoolStepHint">How much would you like to lend?</div>
                            <div className="lendPoolStepModalAmount">
                                <div className="lendPoolStepModalAmountTop">
                                    <div className="lendPoolStepModalAmountTopLeft">
                                        Amount you lend
                                    </div>
                                    <div className="lendPoolStepModalAmountTopRight">
                                        {Data.lendModal.maxAmount}
                                    </div>
                                </div>
                                <div className="lendPoolStepModalAmountBottom">
                                    <div className="lendPoolStepModalAmountBottomLeft">
                                        <input type="text" className="lendPoolStepModalAmountBottomLeftField" placeholder="Enter amount" onChange={e => setLendAmount(e.target.value)} value={lendAmount} />
                                    </div>
                                    <div className="lendPoolStepModalAmountBottomRight">
                                        {Data.lendModal.asset}
                                    </div>
                                </div>
                            </div>


                            </div>

                            <div className="lendPoolGreyPad">

                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Total Return
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    {Data.lendModal.totalReturn}
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                        Interest
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    {Data.lendModal.interest}
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Repayment
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    {Data.lendModal.repayment}
                                    </div>

                                </div>


                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Frequency
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                        {Data.lendModal.frequency}
                                    </div>

                                </div>

                                
                                <div className="lendPoolGreyPadLine">

                                    <div className="lendPoolGreyPadLineHint">
                                    Estimated loan end date
                                    </div>

                                    <div className="lendPoolGreyPadLineValue">
                                    {Data.lendModal.estimatedLoanEndDate}
                                    </div>

                                </div>

                                </div>
                           
                            <div className="lendPoolStepModalLineButton button" onClick={lendFunc}>
                                    Lend to pool
                            </div>
                    </div>
                </div>
            </div>

            :null}
                    
                </React.Fragment>
    )
}
