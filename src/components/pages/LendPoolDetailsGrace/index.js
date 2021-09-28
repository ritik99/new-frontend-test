import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import LendDetailsTabs from '../../uiElements/Tabs/LendDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import VoteModal from '../../uiElements/VoteModal'

import Data from '../../../etc/data.json'

export default function LendPoolDetailsGrace() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [showVoteModal, setShowVoteModal] = useState(false)

    const withdrawFunc = () => {
        alert('withdrawFunc')
    }


    return (
        <React.Fragment>
            <VoteModal showVoteModal={showVoteModal} setShowVoteModal={setShowVoteModal} />
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">
                    <div className="lendDetailsLeftPart">
                        <div onClick={() => history.push('/dashboard')} className="lendDetailsBackLine button">
                            <div className="lendDetailsBackLineIcon">
                            
                            </div>
                            Back
                        </div>
                    
                        <div className="lendDetailsOwnerLine">

                            <div className="lendDetailsOwnerLineLeft">

                                <div className="lendDetailsOwnerIcon"></div>
                                <div className="lendDetailsOwnerName">stani.eth</div>
                                <div className="lendDetailsOwnerUsername">@StaniKulechov</div>
                            
                            </div>

                            <div className="lendDetailsOwnerLineRight">

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusRed">
                                    {Data.lendPoolDetailsGrace.status}
                                </div>

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusGrey">
                                {Data.lendPoolDetailsGrace.type}
                                </div>

                                <div className="lendDetailsPoolDate">
                                    Pool created on {Data.lendPoolDetailsGrace.publishedDate}
                                </div>
                            
                            </div>

                        </div>
                    
                      
                        <div className="lendDetailsMainTitle">
                            Actions you can take
                        </div>

                        <div className="lendDetailsVoteArea">
                            <div className="lendDetailsVoteAreaLeft">
                                <div className="lendDetailsVoteAreaLeftLine1">
                                    Vote for extension request
                                </div>
                                <div className="lendDetailsVoteAreaLeftLine2">
                                    <div className="lendDetailsVoteAreaLeftLine2Item1">
                                        Quorum 23%
                                    </div>
                                    <div className="lendDetailsVoteAreaLeftLine2Item2">
                                        33% needed
                                    </div>
                                </div>
                                <div className="lendDetailsVoteAreaLeftLine3">
                                    Voting ends in 1d 12h 43m
                                </div>
                            </div>
                            <div className="lendDetailsVoteAreaRight">

                                <div className="lendDetailsVoteAreaRightLeft">
                                    <div className="lendDetailsVoteAreaRightLeftStatusLineWrapper">

                                        <div className="lendDetailsVoteAreaRightLeftStatusLineOuter">
                                            <div style={{width:'50%'}} className="lendDetailsVoteAreaRightLeftStatusLineInner lendDetailsVoteAreaRightLeftStatusLineInnerGreen">
                            
                                            </div>
                                        </div>

                                        <div className="lendDetailsVoteAreaRightLeftStatusLineOuter">
                                            <div style={{width:'20%'}} className="lendDetailsVoteAreaRightLeftStatusLineInner lendDetailsVoteAreaRightLeftStatusLineInnerRed">
                            
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="lendDetailsVoteAreaRightRight">
                                    <div className="lendDetailsVoteAreaRightRightButton button"  onClick={() => setShowVoteModal(true)}>
                                        Vote
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                       

                        <LendDetailsTabs />

                       
                        

                    </div>








                    <div className="lendDetailsRightPart">
                        <div className="lendDetailsPoolArea">
                            <div className="lendDetailsPoolAreaTitle">
                                Pool Details
                            </div>



                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowing Rate
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsGrace.borrowingRate}
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowed Amount
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsGrace.borrowedAmount}
                                </div>
                            </div>



                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsGrace.lockedCollateral}
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Remaining Load Period
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsGrace.remainingLoadPeriod}
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Next Repayment
                                </div>
                                <div className="lendDetailsPoolLineValue">

                                {Data.lendPoolDetailsGrace.nextRepayment}
                                </div>
                            </div>


                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Next Repayment Date
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsGrace.nextRepaymentDate}
                                </div>
                            </div>





                            <div className="lendDetailsPoolLineUserLended">
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         You lent
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValuePurple">
                                         {Data.lendPoolDetailsGrace.youLent}
                                         </div>
                                     </div>
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Repayment
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueGreen">
                                         {Data.lendPoolDetailsGrace.repayment}
                                         </div>
                                     </div>
                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Repayment progress
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                         {Data.lendPoolDetailsGrace.repaymentProgress}
                                         </div>
                                     </div>

                                     <div className="lendDetailsPoolLine">
                                         <div className="lendDetailsPoolLineHint">
                                         Available to withdraw
                                         </div>
                                         <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                         {Data.lendPoolDetailsGrace.availableToWithdraw}
                                         </div>
                                     </div>
                                 </div>


                       
                            <div className="lendDetailsPoolLine lendDetailsPoolLineButtons">




                                <div className="lendDetailsPoolLineButton lendDetailsPoolLineButtonAdd button lendDetailsPoolLineButtonBig" onClick={withdrawFunc}>

                                    Withdraw
                                
                                </div>


                            </div>





                        </div>
                    
                        <div className="lendDetailsPoolHistoryWrapper">
                            <div className="lendDetailsPoolHistoryTitle">
                                Pool history
                            </div>

                            <div className="lendDetailsPoolHistoryItemsWrapper">
                               
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
