import React from 'react'
import './style.css'

import Data from '../../../etc/data.json'

export default function MarginCallItem({setShowRespondToMarginCallModal}) {

    const addMoreCollateral = (data) =>{
        alert('RespondToMarginCall')
        setShowRespondToMarginCallModal(true);
    }

    return (
        <React.Fragment>
            {Data.marginCall.map((items, index) => (
                <div key={index} className="lenderItemLine lenderItemLineMc">
                    <div className="lenderItemLineWrapper lenderItemLineWrapperMc">
                        <div className="lenderItemLineLeft">
                            <div className="lenderItemLineIcon icon" />
                            <div className="lenderItemLineName">
                                {items.lenderName}
                            </div>
                            <div className="lenderItemLineUsername">
                                {items.lenderUsername}
                            </div>
                        </div>
                        <div className="lenderItemLineRight lenderItemLineRightMagrin">
                            <div className="lenderItemLineRightItem">
                                <div className="lenderItemLineRightItemHint">
                                    Amount Lent
                                </div>
                                <div className="lenderItemLineRightItemValue">
                                    {items.amountLentDai} DAI
                                    <span className="lenderItemLineRightItemValueBottom">${items.amountLentUsd}</span>
                                </div>
                            </div>
                            <div className="lenderItemLineRightItem">
                                <div className="lenderItemLineRightItemHint">
                                    Collateral Amount
                                </div>
                                <div className="lenderItemLineRightItemValue">
                                    {items.collateralAmountWbtc} WBTC
                                    <span className="lenderItemLineRightItemValueBottom">${items.collateralAmountUsd}</span>
                                </div>
                            </div>
                            <div className="lenderItemLineRightItem">
                                <div className="lenderItemLineRightItemHint">
                                    Collateral Ratio
                                </div>
                                <div className="lenderItemLineRightItemValue">
                                    {items.collateralRaio}
                                </div>
                            </div>
                            <div className="lenderItemLineRightItem">
                                <div className="lenderItemLineRightItemButton button" onClick={() => addMoreCollateral('data')}>Add More Collateral</div>
                            </div>
                        </div>
                    </div>
                </div> 
            ))}
        </React.Fragment>
    )
}
