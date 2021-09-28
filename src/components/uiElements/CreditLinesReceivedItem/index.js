import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

import Data from '../../../etc/data.json'

export default function CreditLinesReceivedItem() {

    const history = useHistory();


    return (
        <React.Fragment>
            <div className="creditLinesReceivedItemLine button" onClick={() => {history.push('/credit-lines-received-subpage')}}>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.address}
                </div>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.borrowLimit}
                </div>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.collateralAsset}
                </div>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.interestRate}
                </div>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.collateralRatio}
                </div>
                <div className="creditLinesReceivedItemLinePart">
                {Data.creditLinesReceived.liquidationThreshold}
                </div>
                
            </div>
        </React.Fragment>
    )
}
