import React from 'react'
import {useState,useEffect} from 'react'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import { useHistory } from 'react-router-dom'
import ProfileTabs from '../../uiElements/Tabs/ProfileTabs'
import './style.css'


import Data from '../../../etc/data.json'


export default function Profile() {

    const [showAddCollateralModal, setShowAddCollateralModal] = useState(false)
    const [showRepayModal, setShowRepayModal] = useState(false)
    const [showCreateBorrowPoolModal, setShowCreateBorrowPoolModal] = useState(false)
    const [showSendCreditLineModal, setShowSendCreditLineModal] = useState(false)

    const verifyTwitter = () => {
        alert('verifyTwitter')
    }

    return (
        <React.Fragment>
             <Header />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding">

                    <div className="profileLelfPart">

                        <div className="profileLelfPartLine profileLelfPartLine1">

                            <div className="profileUserIcon">
                                <div className="profileUserVerifiedBadge">
                                </div>
                            </div>

                            <div className="profileUserAddress">
                                {Data.profile.address}
                            </div>

                        </div>

                        <div className="profileLelfPartLine">

                            <div className="twitterVerified">
                                <div className="twitterVerifiedLelft">
                                    <div className="twitterVerifiedLine1">
                                        Twitter
                                    </div>
                                    <div className="twitterVerifiedLine2">
                                        Unverified
                                    </div>
                                </div>
                              
                                <div className="twitterVerifiedLineButton" onClick={() => verifyTwitter() }>
                                    Verify now
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="profileRightPart">

                    <ProfileTabs showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal} showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} showCreateBorrowPoolModal={showCreateBorrowPoolModal} setShowCreateBorrowPoolModal={setShowCreateBorrowPoolModal} showSendCreditLineModal={showSendCreditLineModal} setShowSendCreditLineModal={setShowSendCreditLineModal} />
                        
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
