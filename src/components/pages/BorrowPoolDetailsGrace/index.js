import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import BorrowDetailsTabs from '../../uiElements/Tabs/BorrowDetailsTabs'
import { useHistory } from 'react-router-dom'
import './style.css'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import RepayModal from '../../uiElements/RepayModal'
import RespondToMarginCallModal from '../../uiElements/RespondToMarginCallModal'
import MarginCallItem from '../../uiElements/MarginCallItem'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'


import { useLocation } from "react-router-dom";

import Data from "../../../etc/data.json"

export default function BorrowPoolDetailsGrace() {

    const history = useHistory();
    const location = useLocation();

    const [showAddCollateralModal, setShowAddCollateralModal] = useState(false)
    const [showRepayModal, setShowRepayModal] = useState(false)
    const [showRespondToMarginCallModal, setShowRespondToMarginCallModal] = useState(false)



    return (
        <React.Fragment>
            <AddCollateralModal showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal}/>
            <RepayModal showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} />
            <RespondToMarginCallModal showRespondToMarginCallModal={showRespondToMarginCallModal} setShowRespondToMarginCallModal={setShowRespondToMarginCallModal} />
            <Header  />
            <div className="pageOuter">
                <div className="pageWrapper">
                    <div className="borrowDetailsLeftPart">
                        <div onClick={() => history.push('/dashboard')} className="borrowDetailsBackLine button">
                            <div className="borrowDetailsBackLineIcon">
                            
                            </div>
                            Back
                        </div>
                    
                        <div className="borrowDetailsOwnerLine">

                            <div className="borrowDetailsOwnerLineLeft">

                                <div className="borrowDetailsOwnerIcon"></div>
                                <div className="borrowDetailsOwnerName">{Data.borrowPoolDetailsGrace.name}</div>
                                <div className="borrowDetailsOwnerUsername">{Data.borrowPoolDetailsGrace.username}</div>
                            
                            </div>

                            <div className="borrowDetailsOwnerLineRight">

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusRed">
                                    {Data.borrowPoolDetailsGrace.status}
                                </div>

                          

                                <div className="borrowDetailsPoolDate">
                                    Pool created on {Data.borrowPoolDetailsGrace.createdDate}
                                </div>
                            
                            </div>

                        </div>
                    
                        <div className="borrowDetailsMainTitle">
                            Actions you can take
                        </div>

                        <div className="borrowDetailsRepayArea">

                            <div className="borrowDetailsRepayAreaTitle">
                                Make a repayment
                            </div>

                            <div className="borrowDetailsRepayAreaButton button"  onClick={() => setShowRepayModal(true)}>
                                Repay
                            </div>

                            <div className="borrowDetailsRepayAreaDescription">
                                Repayment period ends {Data.borrowPoolDetailsGrace.repaymentEnds} 
                            </div>

                         

                            <div className="borrowDetailsRepayAreaSpacerLine">
                                
                            </div>

                            <div className="borrowDetailsRepayAreaWarning">

                                <div className="borrowDetailsRepayAreaWarningIcon icon">
                                
                                </div>

                                In case repayment is not made until the period ends, your collateral will be liquidated.
                                
                            </div>

                        </div>


                        <div className="borrowDetailsMainTitle">
                            Margin Calls
                        </div>

                        <MarginCallItem setShowRespondToMarginCallModal={setShowRespondToMarginCallModal} />

                        <BorrowDetailsTabs />

                    </div>








                    <div className="borrowDetailsRightPart">
                        <div className="borrowDetailsPoolArea">
                            <div className="borrowDetailsPoolAreaTitle">
                                Pool Details
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Borrowing Rate
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.borrowingRate} 
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Borrowed Amount
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.borrowedAmount} 
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.lockedCollateral} 
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Remaining Loan Period
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.remainingLoanPeriod} 
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Repayment progress
                                </div>
                                <div className="borrowDetailsPoolLineValue">

                                {Data.borrowPoolDetailsGrace.repaymentProgress}%
                                    <div className="borrowDetailsPoolBarOuter">
                                        <div style={{width: `${Data.borrowPoolDetailsGrace.repaymentProgress}%`}} className="borrowDetailsPoolBarInner"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Next Repayment
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.nextRepayment}
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Next Repayment Date
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsGrace.nextRepaymentDate}
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine borrowDetailsPoolLineButtons">


                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonRepay button" onClick={() => setShowRepayModal(true)}>

                                    Repay
                                
                                </div>


                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonAdd button" onClick={() => setShowAddCollateralModal(true)}>

                                    Add collateral
                                
                                </div>


                            </div>





                        </div>
                    
                        <div className="borrowDetailsPoolHistoryWrapper">
                            <div className="borrowDetailsPoolHistoryTitle">
                                Pool history
                            </div>

                            <div className="borrowDetailsPoolHistoryItemsWrapper">
                               
                                <PoolHistoryItem />
                                <PoolHistoryItem />
                                <PoolHistoryItem />

                            </div>



                        </div>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
