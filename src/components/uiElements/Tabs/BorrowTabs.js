import React from 'react'
import { useState, useEffect } from 'react'
import BorrowPoolCard from '../PoolCard/BorrowPoolCard'
import TabPlaceholder from '../TabPlaceholder'
import './style.css'
import DropdownMenu from '../DropdownMenu'
import { useHistory } from 'react-router-dom'

import Data from '../../../etc/data.json'

import CreateBorrowPoolModal from '../CreateBorrowPoolModal'
import RepayModal from '../RepayModal'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import SendCreditLineModal from '../../uiElements/SendCreditLineModal'
import PageSwitcher from '../PageSwithcer'


export default function BorrowTabs({showAddCollateralModal, setShowAddCollateralModal, showRepayModal, setShowRepayModal, showCreateBorrowPoolModal, setShowCreateBorrowPoolModal, showSendCreditLineModal, setShowSendCreditLineModal}) {
    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]

    const history = useHistory();
    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const activePools = Data.borrowPools.filter((item) => {
        return item.poolStatus === "Active";         
    });

    const collectingPools = Data.borrowPools.filter((item) => {
        return item.poolStatus === "Collecting";         
    });

    const closedPools = Data.borrowPools.filter((item) => {
        return item.poolStatus === "Closed" || item.poolStatus === "Defaulted" || item.poolStatus === "Cancelled" || item.poolStatus === "Terminated";         
    });




          //Pools Data To display
    const [borrowPoolsPaged, setBorrowPoolsPaged] = useState([])
    const [activePoolsPaged, setActivePoolsPaged] = useState([])
    const [collectingPoolsPaged, setCollectingPoolsPaged] = useState([])
    const [closedPoolsPaged, setClosedPoolsPaged] = useState([])

    //page (working auto)
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1)

    //Page updates content
    const updateActivePools = (from, to) => {
        const array = activePools;
        const sliced = array.slice(from, to)
        setActivePoolsPaged(sliced)
    }

    const updateCollectingPools = (from, to) => {
        const array = collectingPools;
        const sliced = array.slice(from, to)
        setCollectingPoolsPaged(sliced)
    }

    const updateClosedPools = (from, to) => {
        const array = closedPools;
        const sliced = array.slice(from, to)
        setClosedPoolsPaged(sliced)
    }

    const updateAllPools = (from, to) => {
        const array = Data.borrowPools;
        const sliced = array.slice(from, to)
        setBorrowPoolsPaged(sliced)
    }

    useEffect(() => {
        if(toggleState == 1){
            
            updateAllPools(0, itemsPerPage)
            setCurrentPage(1)
        }

        if(toggleState == 2){
            
            updateActivePools(0, itemsPerPage)
            setCurrentPage(1)
        }
        if(toggleState == 3){
            
            updateCollectingPools(0, itemsPerPage)
            setCurrentPage(1)
        }
        if(toggleState == 4){
            
            updateClosedPools(0, itemsPerPage)
            setCurrentPage(1)
        }
    }, [toggleState])



    return (
        <React.Fragment>
            <SendCreditLineModal showSendCreditLineModal={showSendCreditLineModal} setShowSendCreditLineModal={setShowSendCreditLineModal} />
            <AddCollateralModal showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal}/>
            <RepayModal showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} />
            <CreateBorrowPoolModal showCreateBorrowPoolModal={showCreateBorrowPoolModal} setShowCreateBorrowPoolModal={setShowCreateBorrowPoolModal} />

         
            <div className="tabsWrapper">
                <div className={toggleState === 1 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(1) }>
                    All Pools
                </div>
                <div className={toggleState === 2 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(2)}>
                    Active
                </div>
                <div className={toggleState === 3 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(3)}>
                    Collecting
                </div>
                <div className={toggleState === 4 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(4)}>
                    Past Pools
                </div>
            </div>
            <div className="tabsAdditionalButtons">
                <div className="tabsAdditionalButtonsWrapper1">
            <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
            </div>        
                <div className="borrowTabButton button" onClick={() => setShowSendCreditLineModal(true)}>
                    Request a line of Credit
                </div>
                <div className="borrowTabButton" onClick={() => setShowCreateBorrowPoolModal(true)}>
                    Create  pool
                </div>
            </div>
            <div className="tabsContentWrapper">
                <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>
                    {Data.borrowPools.length > 0 ? 
                    <React.Fragment>
                        {borrowPoolsPaged.map((data, index) => (

                            <BorrowPoolCard setShowRepayModal={setShowRepayModal} setShowAddCollateralModal={setShowAddCollateralModal} showAddCollateralModal={showAddCollateralModal} key={index} data={data} size={'3x'} />
    
                        ))}

                        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={Data.borrowPools.length} itemsPerPage={itemsPerPage} update={updateAllPools} />
                        </React.Fragment>

                        

                    : 
                        <TabPlaceholder />
                    }
                </div>
                <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>
                    {activePools.length > 0 ?
                     <React.Fragment>
                        {activePoolsPaged.map((data, index) => (

                            <BorrowPoolCard setShowRepayModal={setShowRepayModal} setShowAddCollateralModal={setShowAddCollateralModal} showAddCollateralModal={showAddCollateralModal} key={index} data={data} size={'3x'} />
    
                        ))}
                        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={activePools.length} itemsPerPage={itemsPerPage} update={updateActivePools} />
                       
                        </React.Fragment>
                    :
                        <TabPlaceholder />
                    }
                </div>
                <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>
                {collectingPools.length > 0 ? 
                    <React.Fragment>
                    {collectingPoolsPaged.map((data, index) => (

                        <BorrowPoolCard setShowRepayModal={setShowRepayModal} setShowAddCollateralModal={setShowAddCollateralModal} showAddCollateralModal={showAddCollateralModal} key={index} data={data} size={'3x'} />

                    ))}
                    <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={collectingPools.length} itemsPerPage={itemsPerPage} update={updateCollectingPools} />
                       
                    </React.Fragment>
                :
                    <TabPlaceholder />
                }
                </div>
                <div className={toggleState === 4 ? "tabsContentActive" : "tabsContent"}>
                {closedPools.length > 0 ?
                 <React.Fragment>
                    {closedPoolsPaged.map((data, index) => (

                        <BorrowPoolCard setShowRepayModal={setShowRepayModal} setShowAddCollateralModal={setShowAddCollateralModal} showAddCollateralModal={showAddCollateralModal} key={index} data={data} size={'3x'} />

                    ))}
                       <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={closedPools.length} itemsPerPage={itemsPerPage} update={updateClosedPools} />
                    
                    </React.Fragment>
                :
                    <TabPlaceholder /> 
                }
                </div>
            </div>
        </React.Fragment>
    )
}
