import React from 'react'
import './style.css'

export default function CreditLinesRequestSentItem({data, openItem}) {

    //data is ready to use

    return (
        <React.Fragment>
        <div className="creditLinesRequestSentItem button" onClick={() => {openItem()}}>
            <div className="creditLinesRequestSentItemLinePart">
            1
            </div>
            <div className="creditLinesRequestSentItemLinePart">
            2
            </div>
            <div className="creditLinesRequestSentItemLinePart">
            3
            </div>
            <div className="creditLinesRequestSentItemLinePart">
            4
            </div>
        
        </div>
    </React.Fragment>
    )
}
