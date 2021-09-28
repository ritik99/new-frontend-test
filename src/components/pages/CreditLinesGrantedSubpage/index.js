import React from 'react'
import {useState} from 'react'
import './style.css'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import CreditLinesGrantedSubpageItem from '../../uiElements/CreditLinesGrantedSubpageItem'
import CreditLinesGrantedSubpageModal from '../../uiElements/CreditLinesGrantedSubpageModal'
import CreditLinesHistoryItem from '../../uiElements/CreditLinesHistoryItem'

import Data from '../../../etc/data.json'



export default function CreditLinesGrantedSubpage () {
    const [isLoading, setIsLoading] = useState(false);

    const liquidateFunc = () => {
        alert('liquidateFunc')
    }

    const closeCreditLineFunc = () => {
        alert('closeCreditLineFunc')
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
                                    {Data.creditLineGrantedSubpage.currentDebt} <span> {Data.creditLineGrantedSubpage.currentDebtValue}</span>
                                    </div>

                                    <div className="dashboardCardHint">
                                    Current Debt
                                    </div>

                            </div>

                            <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                    <div className="dashboardCardValue">
                                    {Data.creditLineGrantedSubpage.principal} <span>{Data.creditLineGrantedSubpage.principalValue}</span>
                                    </div>

                                    <div className="dashboardCardHint">
                                    Principal
                                    </div>

                            </div>

                            <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                <div className="dashboardCardValue">
                                {Data.creditLineGrantedSubpage.interestAccured} <span>{Data.creditLineGrantedSubpage.interestAccuredValue}</span>
                                </div>

                                <div className="dashboardCardHint">
                                Interest Accured
                                </div>

                                </div>

                                <div className="dashboardCard dashboardCard4x dashboardCard4xGranted">

                                <div className="dashboardCardValue">
                                {Data.creditLineGrantedSubpage.currentCollateralRatio}
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
                    
                    <div className="CreditLinesGrantedSubpageButton button" onClick={liquidateFunc}>
                    Liquidate
                    </div>
                    <div className="CreditLinesGrantedSubpageButton button" onClick={closeCreditLineFunc}>
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
                                {Data.creditLineGrantedSubpage.name}
                                </div>
                                <div className="creditLinesPageGrantedRightTopText2">
                                {Data.creditLineGrantedSubpage.address}
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
                            {Data.creditLineGrantedSubpage.creditLimit}
                            </div>
                        </div>
                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Interest Rate
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineGrantedSubpage.interestRate}
                            </div>
                        </div>
                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Ideal Collateral Ratio
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineGrantedSubpage.idealCollateralRatio}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Collateral Asset
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineGrantedSubpage.collateralAsset}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Liquidation Threshold
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineGrantedSubpage.liquidationThreshold}
                            </div>
                        </div>

                        <div className="creditLinesPageGrantedRightLine">
                            <div className="creditLinesPageGrantedRightLineLeft">
                            Auto Liquidate
                            </div>
                            <div className="creditLinesPageGrantedRightLineRight">
                            {Data.creditLineGrantedSubpage.autoLiquidate}
                            </div>
                        </div>

                   </div>
                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}
