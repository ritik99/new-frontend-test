import React from 'react'
import { useState, useEffect } from 'react'
import LendPoolCard from '../PoolCard/LendPoolCard'
import './style.css'
import DropdownMenu from '../DropdownMenu'

import LendModal from '../LendModal'
import PageSwitcher from '../PageSwithcer'

import Data from '../../../etc/data.json'

export default function LendTabs({showLendModal, setShowLendModal}) {


    const dropdownData = [
        {
            value: 'Sort by 1',
        },
        {
            value: 'Sort by 2'
        },
    ]






    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])

    

    const [toggleState, setToggleState] = useState(1);

    

    const toggleTab = (index) => {
        setToggleState(index);
    }


    const activePools = Data.lendPools.filter((item) => {
        return item.poolStatus === "Active";         
    });

    const collectingPools = Data.lendPools.filter((item) => {
        return item.poolStatus === "Collecting";         
    });

    const closedPools = Data.lendPools.filter((item) => {
        return item.poolStatus === "Closed" || item.poolStatus === "Defaulted" || item.poolStatus === "Cancelled" || item.poolStatus === "Terminated";         
    });






      //Pools Data To display
      const [lendPoolsPaged, setLendPoolsPaged] = useState([])
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
          const array = Data.lendPools;
          const sliced = array.slice(from, to)
          setLendPoolsPaged(sliced)
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
                 <LendModal showLendModal={showLendModal} setShowLendModal={setShowLendModal} />

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
                        Closed
                    </div>
                </div>

                <div className="tabsAdditionalButtons">
                <div className="tabsAdditionalButtonsWrapper1">
                <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                </div> 
                    <div className="lendTabSearch">
                        <input className="lendTabSearchField" type="text" placeholder="Search" />
                        <div className="lendTabSearchIcon">

                        </div>
                    </div>
                </div>

                <div className="tabsContentWrapper">
                    <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>
                    {lendPoolsPaged.map((data, index) => (

                        <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'3x'} />

                    ))}
                         <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={Data.lendPools.length} itemsPerPage={itemsPerPage} update={updateAllPools} />
                     
                    </div>
                    <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>
                        {activePoolsPaged.map((data, index) => (

                        <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'3x'} />

                        ))}

                        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={activePools.length} itemsPerPage={itemsPerPage} update={updateActivePools} />  
                    </div>
                    <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>
                        {collectingPoolsPaged.map((data, index) => (

                    <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'3x'} />

                    ))}

                        <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={collectingPools.length} itemsPerPage={itemsPerPage} update={updateCollectingPools} />  
                    </div>
                    <div className={toggleState === 4 ? "tabsContentActive" : "tabsContent"}>
                        {closedPoolsPaged.map((data, index) => (

                        <LendPoolCard setShowLendModal={setShowLendModal} key={index} data={data} size={'3x'} />

                        ))}
                          <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} itemsAmount={closedPools.length} itemsPerPage={itemsPerPage} update={updateClosedPools} />  
                    </div>
                </div>
            </React.Fragment>
    )
}
