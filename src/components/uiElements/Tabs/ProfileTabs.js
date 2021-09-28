import React from 'react'
import { useState } from 'react'
import './style.css'




import Timeline from '../Timeline'
import ProfileBorrowTabs from './ProfileBorrowTabs'

import Data from '../../../etc/data.json'

export default function ProfileTabs({showAddCollateralModal, setShowAddCollateralModal, showRepayModal, setShowRepayModal, showCreateBorrowPoolModal, setShowCreateBorrowPoolModal,  showSendCreditLineModal, setShowSendCreditLineModal}) {




    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const poolsCreated = Data.borrowPools.length;

    const activePools = (Data.borrowPools.filter((item) => {
        return item.pool_status === "Active";         
    })).length;

    const defaultedPools = (Data.borrowPools.filter((item) => {
        return item.pool_status === "Defaulted";         
    })).length;


    const borrowItemsData = [
        {
            value: poolsCreated,
            hint: 'Pools Created'
        },
        {
            value: activePools,
            hint: 'Active Pools'
        },
        {
            value: defaultedPools,
            hint: 'Times Defaulted'
        },
        {
            value: '$0',
            hint: 'Borrowing'
        },
    ]






    return (
        <React.Fragment>





            <div className="profileTabsContentWrapper">


                <div className="tabsContentActive">


                    <div className="profilePageTitle">
                        Borrowing
                    </div>

                    <div className="cardsWrapper">



                        {borrowItemsData.map((items, index) => (

                            <div key={index} className="profileCard">

                                <div className="profileCardValue">
                                    {items.value}
                                </div>

                                <div className="profileCardHint">
                                    {items.hint}
                                </div>

                            </div>

                        ))}


                        
                    </div>


                    <div className="profilePageTitle">
                        Timeline
                    </div>

                    <Timeline />

                    <ProfileBorrowTabs showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal} showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} showCreateBorrowPoolModal={showCreateBorrowPoolModal} setShowCreateBorrowPoolModal={setShowCreateBorrowPoolModal} showSendCreditLineModal={showSendCreditLineModal} setShowSendCreditLineModal={setShowSendCreditLineModal} />
                    
                

                </div>

    

            </div>


        </React.Fragment>
    )
}
