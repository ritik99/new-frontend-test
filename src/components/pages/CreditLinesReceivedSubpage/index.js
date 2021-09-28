import React from 'react'
import {useState} from 'react'
import './style.css'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import CreditLinesGrantedSubpageItem from '../../uiElements/CreditLinesGrantedSubpageItem'
import CreditLinesGrantedSubpageModal from '../../uiElements/CreditLinesGrantedSubpageModal'
import CreditLinesHistoryItem from '../../uiElements/CreditLinesHistoryItem'

import Data from '../../../etc/data.json'



export default function CreditLinesReceivedSubpage () {
    const [isLoading, setIsLoading] = useState(false);

    const borrowFunc = () => {
        alert('borrowFunc')
    }

    const repayFunc = () => {
        alert('reapyFunc')
    }

    const addCollateral = () => {
        alert('addCollateral')
    }

    const removeCollateral = () => {
        alert('removeCollateral')
    }
    const closeCreditLine = () => {
        alert('closeCreditLine')
    }


    return (
        <React.Fragment>
            
         
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding pageWrapperCreditLines">


                   <div className="creditLinesPageGrantedLeft">
                   <div className="CreditLinesGrantedSubpageTopLine">
                        <div className="CreditLinesGrantedSubpageTopLineRight">

                        <div class="pageTitle pageTitleSecondary">Stats</div>
                            <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                    <div className="dashboardCardValue">
                                    {Data.creditLineReceivedSubpage.currentDebt} <span> {Data.creditLineReceivedSubpage.currentDebtValue}</span>
                                    </div>

                                    <div className="dashboardCardHint">
                                    Current Debt
                                    </div>

                            </div>

                            <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                    <div className="dashboardCardValue">
                                    {Data.creditLineReceivedSubpage.principal} <span>{Data.creditLineReceivedSubpage.principalValue}</span>
                                    </div>

                                    <div className="dashboardCardHint">
                                    Principal
                                    </div>

                            </div>

                            <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                <div className="dashboardCardValue">
                                {Data.creditLineReceivedSubpage.interestAccured} <span>{Data.creditLineReceivedSubpage.interestAccuredValue}</span>
                                </div>

                                <div className="dashboardCardHint">
                                Interest Accured
                                </div>

                                </div>

                                <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                <div className="dashboardCardValue">
                                {Data.creditLineReceivedSubpage.currentCollateralRatio}
                                </div>

                                <div className="dashboardCardHint">
                                Current Collateral Ratio
                                </div>

                                </div>
                        
                        </div>


                        
                    </div>

                    <div className="CreditLinesGrantedSubpageLine2">
                    <div class="pageTitle pageTitleSecondary">Actions you can take</div>
                    <div className="CreditLinesGrantedSubpageButtonsLine">
                    
                    <div className="CreditLinesGrantedSubpageButton button" onClick={borrowFunc}>
                    Borrow
                    </div>

                    
                    <div className="CreditLinesGrantedSubpageButton button"  onClick={repayFunc}>
                    Repay
                    </div>

                    <div className="CreditLinesGrantedSubpageButton button" onClick={addCollateral}>
                    Add Collateral
                    </div>
                    <div className="CreditLinesGrantedSubpageButton button"  onClick={removeCollateral}>
                    Remove Collateral
                    </div>
                    <div className="CreditLinesGrantedSubpageButton button" onClick={closeCreditLine}>
                    Close Credit Line
                    </div>
                   
                </div>
                    </div>

                    <div className="CreditLinesGrantedSubpageLine3">
                    <div class="pageTitle pageTitleSecondary">Credit Line History</div>
                    </div>

                    {Data.creditLineHistory.map((item, index) => (
                        
                        <CreditLinesHistoryItem item={item} />
                    ))}


                   
               
               
                   </div>
                



                   <div className="creditLinesPageGrantedRight">

                        <div className="creditLinesPageGrantedRightTop">
                            <div className="creditLinesPageGrantedRightTopIcon">
                            
                            </div>
                            <div className="creditLinesPageGrantedRightTopText">
                                <div className="creditLinesPageGrantedRightTopText1">
                                {Data.creditLineReceivedSubpage.name}
                                </div>
                                <div className="creditLinesPageGrantedRightTopText2">
                                {Data.creditLineReceivedSubpage.address}
                                </div>
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightTitle">
                            Credit Line Details
                        </div>
                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Credit Limit
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.creditLimit}
                            </div>
                        </div>
                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Interest Rate
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.interestRate}
                            </div>
                        </div>
                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Ideal Collateral Ratio
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.idealCollateralRatio}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Collateral Asset
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.collateralAsset}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Liquidation Threshold
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.liquidationThreshold}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Auto Liquidate
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineReceivedSubpage.autoLiquidate}
                            </div>
                        </div>

                   </div>
                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}
