import React, { useEffect, useState } from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import { useLocation } from "react-router-dom";


import Data from '../../../etc/data.json'

export default function BorrowPoolDetailsCollecting() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [showAddCollateralModal, setShowAddCollateralModal] = useState(false)

    
    


    useEffect(() => {
       
    },[]);

    return (
        <React.Fragment>
               <AddCollateralModal showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal}/>
            <Header isLoading={isLoading} />
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
                                <div className="borrowDetailsOwnerName">{Data.borrowPoolDetailsCollecting.name}</div>
                                <div className="borrowDetailsOwnerUsername">{Data.borrowPoolDetailsCollecting.username}</div>
                            
                            </div>

                            <div className="borrowDetailsOwnerLineRight">

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusOrange">
                                {Data.borrowPoolDetailsCollecting.status}
                                </div>

                                <div className="borrowDetailsPoolStatus borrowDetailsPoolStatusGrey">
                                {Data.borrowPoolDetailsCollecting.type}
                                </div>

                                <div className="borrowDetailsPoolDate">
                                Pool created on {Data.borrowPoolDetailsCollecting.createdDate}
                                </div>
                            
                            </div>

                        </div>
                    
                        {/* <div className="borrowDetailsMainTitle">
                            Pool Description
                        </div>

                        <div className="borrowDetailsMainDescription">
                        We will be using the funds for purchasing of mining equiopment. That’s why I started implementing microscopic habits in the past few years. These never took much time away and don’t...
                        </div> */}



                        <div className="borrowDetailsCollectingLenders">
                            <div className="borrowDetailsCollectingLendersLeft">
                            Lenders
                            </div>
                            <div className="borrowDetailsCollectingLendersRight button">
                            Share with lenders
                            </div>
                        </div>
                        <div className="borrowDetailsCollectingLendersWrapper">
                            <div className="borrowDetailsCollectingLendersWrapperEmpty ">
                                <div className="borrowDetailsCollectingLendersWrapperEmptyIcon icon"></div>
                                <div className="borrowDetailsCollectingLendersWrapperEmptyTitle">
                                    No lenders so far
                                </div>
                                <div className="borrowDetailsCollectingLendersWrapperEmptyText">
                                Share this pool with your friends in order for them to start lending or wait for other Sublime members to participate
                                </div>
                            </div>
                        </div>

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
                                {Data.borrowPoolDetailsCollecting.borrowRate}
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Borrowed Amount
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsCollecting.borrowedAmount}
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsCollecting.collateralAmount}
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Loan Period
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsCollecting.loanPeriod}
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Repayment Frequency
                                </div>
                                <div className="borrowDetailsPoolLineValue">

                                {Data.borrowPoolDetailsCollecting.repaymentFrequency}
                                </div>
                            </div>


                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Collection progress
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsCollecting.collectionProgress}
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine">
                                <div className="borrowDetailsPoolLineHint">
                                Collection ends
                                </div>
                                <div className="borrowDetailsPoolLineValue">
                                {Data.borrowPoolDetailsCollecting.collectionEnds}
                                </div>
                            </div>



                            <div className="borrowDetailsPoolLine borrowDetailsPoolLineButtons">




                                <div className="borrowDetailsPoolLineButton borrowDetailsPoolLineButtonAdd button borrowDetailsPoolLineButtonBig" onClick={() => setShowAddCollateralModal(true)}>

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
