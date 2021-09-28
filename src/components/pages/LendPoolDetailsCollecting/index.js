import React from 'react'
import {useState} from 'react'
import Footer from '../../uiElements/Footer'
import Header from '../../uiElements/Header'
import LendDetailsTabs from '../../uiElements/Tabs/LendDetailsTabs'
import PoolHistoryItem from '../../uiElements/PoolHistoryItem'
import { useHistory } from 'react-router-dom'
import './style.css'


import Data from '../../../etc/data.json'

import { useEffect } from 'react'
import LendModal from '../../uiElements/LendModal'


export default function LendPoolDetailsCollecting() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const [showLendModal, setShowLendModal] = useState(false)

    const [showUserLended, setshowUserLended] = useState(false)
    const [lendPoolDetails,setLendPoolDetails] = useState([])

    useEffect(()=>{
       
    }, [])

 
    return (
        <React.Fragment>
            <LendModal showLendModal={showLendModal} setShowLendModal={setShowLendModal} />
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
                                <div className="lendDetailsOwnerName">{Data.lendPoolDetailsCollecting.name}</div>
                                <div className="lendDetailsOwnerUsername">{Data.lendPoolDetailsCollecting.username}</div>
                            </div>
                            <div className="lendDetailsOwnerLineRight">
                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusOrange">
                                    Collecting
                                </div>
                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusGrey">
                                    Open Borrow
                                </div>
                                <div className="lendDetailsPoolDate">
                                {"Pool created on "+ Data.lendPoolDetailsCollecting.publishedDate} 
                                </div>
                            </div>
                        </div>
                        <LendDetailsTabs/>
                    </div>
                    <div className="lendDetailsRightPart">
                        <div className="lendDetailsPoolArea">
                            <div className="lendDetailsPoolAreaTitle">
                                Pool Details
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                    <a target="_blank" href={Data.lendPoolDetailsCollecting.etherscanLink}>Etherscan <i class="fas fa-search"></i></a>
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowing Rate
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.borrowRate}
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Borrowing
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.borrowedAmount}
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Locked Collateral
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.lockedCollateral}
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Loan Period
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.loanPeriod}    
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Repayment Frequency
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.repaymentFrequency}
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Collection progress
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.collectionProgress}
                                <div className="lendDetailsPoolBarOuter">
                                        <div style={{width: '34%'}} className="lendDetailsPoolBarInner"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lendDetailsPoolLine">
                                <div className="lendDetailsPoolLineHint">
                                Collection ends
                                </div>
                                <div className="lendDetailsPoolLineValue">
                                {Data.lendPoolDetailsCollecting.collectionEnds}
                                </div>
                            </div>
                            {showUserLended &&
                                <div className="lendDetailsPoolLineUserLended">
                                    <div className="lendDetailsPoolLine">
                                        <div className="lendDetailsPoolLineHint">
                                        You lent
                                        </div>
                                        <div className="lendDetailsPoolLineValue lendDetailsPoolLineValuePurple">
                                        700 DAI at 10%
                                        </div>
                                    </div>
                                    <div className="lendDetailsPoolLine">
                                        <div className="lendDetailsPoolLineHint">
                                        Repayment
                                        </div>
                                        <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueGreen">
                                        128.5 DAI every 2 weeks
                                        </div>
                                    </div>
                                    <div className="lendDetailsPoolLine">
                                        <div className="lendDetailsPoolLineHint">
                                        First Repayment
                                        </div>
                                        <div className="lendDetailsPoolLineValue lendDetailsPoolLineValueUnderline">
                                        5 March 2021
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="lendDetailsPoolLine lendDetailsPoolLineButtons">
                                <div className="lendDetailsPoolLineButton lendDetailsPoolLineButtonAdd button lendDetailsPoolLineButtonBig" onClick={() => setShowLendModal(true)}>
                                    Lend more
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
