import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'



import Data from '../../../etc/data.json';

import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'



import BorrowTabs from '../../uiElements/Tabs/BorrowTabs'


export default function Borrow() {

    const history = useHistory();

    //NEW
    const [showAddCollateralModal, setShowAddCollateralModal] = useState(false)
    const [showRepayModal, setShowRepayModal] = useState(false)
    const [showCreateBorrowPoolModal, setShowCreateBorrowPoolModal] = useState(false)
    const [showSendCreditLineModal, setShowSendCreditLineModal] = useState(false)

    return (
        <React.Fragment>
            <Header />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">
                    <div className="pageTitle">
                        Borrow
                    </div>
                    <div className="cardsWrapper">
                    {Data.borrowData.map((items, index) => (

                        <div key={index} className="dashboardCard dashboardCard3x">

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
                        My Pools
                    </div>
                    <div className="dashboardTabsLine">
                            <BorrowTabs showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal} showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} showCreateBorrowPoolModal={showCreateBorrowPoolModal} setShowCreateBorrowPoolModal={setShowCreateBorrowPoolModal} showSendCreditLineModal={showSendCreditLineModal} setShowSendCreditLineModal={setShowSendCreditLineModal} />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>

    )
}
