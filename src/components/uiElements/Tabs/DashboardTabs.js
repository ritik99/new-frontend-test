import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'
import RepayModal from '../RepayModal'
import AddCollateralModal from '../../uiElements/AddCollateralModal'
import LendModal from '../LendModal'
import DropdownMenu from '../DropdownMenu'
import BorrowPoolCard from '../PoolCard/BorrowPoolCard'
import LendPoolCard from '../PoolCard/LendPoolCard'
import PageSwitcher from '../PageSwithcer'

import Data from '../../../etc/data.json'

export default function DashboardTabs({showAddCollateralModal, setShowAddCollateralModal, showRepayModal, setShowRepayModal, showLendModal, setShowLendModal}) {


    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]

    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])


  



      //Pools Data To display
    const [borrowPoolsPaged, setBorrowPoolsPaged] = useState([])
    const [lendPoolsPaged, setLendPoolsPaged] = useState([])


    //page (working auto)
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1)

    //Page updates content
    const updateBorrowPools = (from, to) => {
        const array = Data.borrowPools;
        const sliced = array.slice(from, to)
        setBorrowPoolsPaged(sliced)
    }
    const updateLendPools = (from, to) => {
        const array = Data.lendPools;
        const sliced = array.slice(from, to)
        setLendPoolsPaged(sliced)
    }
    const updateAllPools = (from, to) => {
        const arrayLend = Data.lendPools;
        const arrayBorrow = Data.borrowPools
        const slicedLend = arrayLend.slice(from / 2, to / 2)
        const slicedBorrow = arrayBorrow.slice(from / 2, to / 2)
        setLendPoolsPaged(slicedLend)
        setBorrowPoolsPaged(slicedBorrow)
    }

  

    


        //Tabs state
        const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
            setToggleState(index);
        }

        useEffect(() => {
            if(toggleState == 1){
                
                updateAllPools(0, itemsPerPage)
                setCurrentPage(1)
            }

            if(toggleState == 2){
                
                updateBorrowPools(0, itemsPerPage)
                setCurrentPage(1)
            }
            if(toggleState == 3){
                
                updateLendPools(0, itemsPerPage)
                setCurrentPage(1)
            }
        }, [toggleState])
    
     

        useEffect(() => {
            updateAllPools(0, itemsPerPage)
        }, [])
    
    
    
    


    return (
            <React.Fragment>

            <AddCollateralModal showAddCollateralModal={showAddCollateralModal} setShowAddCollateralModal={setShowAddCollateralModal}/>

            <RepayModal showRepayModal={showRepayModal} setShowRepayModal={setShowRepayModal} />

            <LendModal showLendModal={showLendModal} setShowLendModal={setShowLendModal} />

                <div className="tabsWrapper">
                    <div className={toggleState === 1 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(1) }>
                        All Pools
                    </div>
                    <div className={toggleState === 2 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(2)}>
                        Borrow
                    </div>
                    <div className={toggleState === 3 ? "tabItemActive" : "tabItem"} onClick={ () => toggleTab(3)}>
                        Lend
                    </div>
                </div>

                <div className="tabsAdditionalButtons">
                   <div className="tabsAdditionalButtonsWrapper1">
                    <DropdownMenu dropdownData={dropdownData} dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} />
                </div> 
                </div>

                <div className="tabsContentWrapper">

                    <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>

                        {borrowPoolsPaged.map((data, index) => (

                            <BorrowPoolCard setShowAddCollateralModal={setShowAddCollateralModal} setShowRepayModal={setShowRepayModal} key={index} data={data} size={'2x'} />

                        ))}

                        {lendPoolsPaged.map((data, index) => (

                            <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'2x'} />

                        ))}

                        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={Data.borrowPools.length + Data.lendPools.length} itemsPerPage={itemsPerPage} update={updateAllPools} />


                     
                    </div>

                    <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>

                    {borrowPoolsPaged.map((data, index) => (

                        <BorrowPoolCard setShowRepayModal={setShowRepayModal} setShowAddCollateralModal={setShowAddCollateralModal} showAddCollateralModal={showAddCollateralModal} key={index} data={data} size={'2x'} />

                    ))}

                    <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={Data.borrowPools.length} itemsPerPage={itemsPerPage} update={updateBorrowPools} />


                    </div>

                    <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>

                    {lendPoolsPaged.map((data, index) => (

                        <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'2x'} />

                    ))}

                    <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={Data.lendPools.length} itemsPerPage={itemsPerPage} update={updateLendPools} />

                    </div>

                </div>
            </React.Fragment>
    )
}
