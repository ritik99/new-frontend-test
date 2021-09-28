import React from 'react'
import './style.css'

export default function CreditLinesHistoryItem({item}) {
    return (
        <React.Fragment>

            <div className="creditLinesHistoryItem">
                <div className="creditLinesHistoryItemIcon">
                
                </div>
                <div className="creditLinesHistoryItemLeft">
                <div className="creditLinesHistoryItemLeft1">
                {item.title}
                </div>
                <div className="creditLinesHistoryItemLeft2">
                {item.description}
                </div>
                </div>
                <div className="creditLinesHistoryItemRight">
                {item.value}
                </div>

            </div>
            
        </React.Fragment>
    )
}
