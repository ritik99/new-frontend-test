import React, { useEffect, useState,useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

import Data from '../../../etc/data.json';



//UI Components
import Header from '../../uiElements/Header'
import DashboardTabs from '../../uiElements/Tabs/DashboardTabs';
import VoteModal from '../../uiElements/VoteModal'
import VoteCard from '../../uiElements/VoteCard';
import Footer from '../../uiElements/Footer'






export default function Dashboard() {

    const history = useHistory();

    //Modals
    const [showAddCollateralModal, setShowAddCollateralModal] = useState(false)
    const [showRepayModal, setShowRepayModal] = useState(false)
    const [showLendModal, setShowLendModal] = useState(false)
    const [showVoteModal, setShowVoteModal] = useState(false)

    return (
        <React.Fragment>
            <Header />
            <div className="pageOuter">
                <div className="pageWrapper">

                <div className="dashboardLeft">


                    <div className="pageTitle">
                        Overview
                    </div>
                    <div className="cardsWrapper">

                        {Data.borrowData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard2x">

                                <div className="dashboardCardValue">
                                    {items.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.txt}
                                </div>

                            </div>

                        ))}
                    </div>

                    <div className="pageTitle pageTitleSecondary">
                        Deposit and Save Overview
                    </div>

                    <div className="cardsWrapper">

                        {Data.depositData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard3x">

                                <div className="dashboardCardValue">
                                    {items.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.txt}
                                </div>

                            </div>

                        ))}

                        
                        <div className="viewMoreButton button" onClick={() => history.push("/savings-account")}>
                            View More
                        </div>


                    </div>


                    
                    <div className="pageTitle pageTitleSecondary">
                        Credit Lines
                    </div>

                    <div className="cardsWrapper">

                        {Data.creditData.map((items, index) => (

                            <div key={index} className="dashboardCard dashboardCard4x">

                                <div className="dashboardCardValue">
                                    {items.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {items.txt}
                                </div>

                            </div>

                        ))}

                        
                        <div className="viewMoreButton button" onClick={() => history.push("/credit-lines/received")}>
                            View More
                        </div>


                    </div>


                    <div className="pageTitle pageTitleSecondary">
                        My Pools
                    </div>


                    <div className="dashboardTabsLine">
                        <DashboardTabs showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal} showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} showLendModal={showLendModal} setShowLendModal={setShowLendModal} />
                    </div>

                </div>  


                <div className="dashboardRight">

                    {showVoteModal ? 
                         <VoteModal showVoteModal={showVoteModal} setShowVoteModal={setShowVoteModal} />
                    :
                    null
                    }
                   

                    <div className="pageTitle">
                        Important
                        
                        <span className="importantCounter">
                        ({Data.voteData.length})
                        </span>
                    </div>


                    {Data.voteData.map((data, index) => (
                        <VoteCard key={index} data={data} setShowVoteModal={setShowVoteModal} />
                    ))}

                </div>





                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
