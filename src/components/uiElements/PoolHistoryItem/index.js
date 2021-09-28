import React from 'react'
import './style.css'

import Data from '../../../etc/data.json'

export default function PoolHistoryItem() {
    return (

        <div className="poolHistoryItem">

            <div className="poolHistoryItemStatusWrapper">

                <div className="poolHistoryItemStatusLine">

                </div>

                <div className="poolHistoryItemStatusDot">

                </div>

                        
                        
            </div>
            
            <div className="poolHistoryItemTitle">
            {Data.poolHistory.value}
            </div>
            <div className="poolHistoryItemDate">
            {Data.poolHistory.date}
            </div>

        </div>
    )
}
