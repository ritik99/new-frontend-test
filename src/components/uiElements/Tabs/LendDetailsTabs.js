import React from 'react'
import {useState} from 'react'
import './style.css'

import LenderItem from '../LenderItem'


import Data from '../../../etc/data.json'

export default function LendDetailsTabs() {
    const [toggleState, setToggleState] = useState(1);

 

    return (
        <React.Fragment>
            <div className="borrowDetailsTabsWrapper">
                <div className="borrowDetailsTabsLine">
                    <div className={toggleState === 1 ? "borrowDetailsTabsItemActive button" :  "borrowDetailsTabsItem button"} onClick={() => setToggleState(1)}>
                        Lenders
                    </div>
                    {/* <div className={toggleState === 2 ? "borrowDetailsTabsItemActive button" :  "borrowDetailsTabsItem button"} onClick={() => setToggleState(2)}>
                        Pool Description
                    </div> */}
                </div>
            </div>
            <div className="tabsContentWrapper tabsContentWrapperLenders">
                <div className={toggleState === 1 ? "tabsContentLendersActive" : "tabsContentLenders"}>
                    <div className="pageTitle pageTitleLenders">
                        Lenders
                    </div>
                    <div className="borrowDetailsLendersWrapper">
                  
                        {Data.lenderItem.map((item, index) => (
                            <LenderItem item={item} />
                         
                    ))}
                       
                                     
                    </div>
                </div>
                {/* <div className={toggleState === 2 ? "tabsContentLendersActive" : "tabsContentLenders"}>
                    <div className="pageTitle pageTitleLenders">
                        Pool Description
                    </div>
                    <div className="borrowDetailsMainDescription">
                        We will be using the funds for purchasing of mining equiopment. That’s why I started implementing microscopic habits in the past few years. These never took much time away and don’t...
                        </div>
                </div> */}
            </div>
        </React.Fragment>
    )
}
