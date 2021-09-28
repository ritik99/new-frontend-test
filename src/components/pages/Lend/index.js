import React,{ useEffect, useState,useContext } from 'react'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import { useHistory } from 'react-router-dom'

import LendTabs from '../../uiElements/Tabs/LendTabs'

import Data from '../../../etc/data.json'




export default function Lend() {
 
    const [showLendModal, setShowLendModal] = useState(false)

    const history = useHistory();

  
    return (
        <React.Fragment>
             <Header />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">

                    <div className="pageTitle">
                        Lend
                    </div>

                    <div className="cardsWrapper">
                        {Data.depositData.map((item, index) => (
                            <div key={index} className="dashboardCard dashboardCard3x">

                                <div className="dashboardCardValue">
                                    {item.value}
                                </div>

                                <div className="dashboardCardHint">
                                    {item.txt}
                                </div>

                            </div>
                        ))}
                    </div>



                    <div className="pageTitle pageTitleSecondary">
                        Pools
                    </div>

                    <div className="dashboardTabsLine">
                            <LendTabs showLendModal={showLendModal} setShowLendModal={setShowLendModal} />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
