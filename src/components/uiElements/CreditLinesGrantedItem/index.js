import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import {getSymbol} from '../../../utility/symbol'

export default function CreditLinesGrantedItem(data) {
    const history = useHistory();
    function approve(){
        console.log("approving....")
    }

    function reject(){
        console.log("rejecting....")
    }
    return (
        <React.Fragment>
            <div className="creditLinesGrantedItemLine button" onClick={() => {history.push('/credit-lines-granted-subpage')}}>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.lender.slice(0,5)+'...'+data.data.lender.slice(38,42)}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.BorrowLimit}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {getSymbol(data.data.collateralAsset)}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.BorrowLimit}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.idealCollateralRatio}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.liquidationThreshold}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                {data.data.autoLiquidation}
                </div>
                <div className="creditLinesGrantedItemLinePart">
                    <div className="creditLinesGrantedItemLinePartButton creditLinesGrantedItemLinePartButtonApprove button">
                        Approve
                    </div>
                </div>
                <div className="creditLinesGrantedItemLinePart">
                    <div className="creditLinesGrantedItemLinePartButton creditLinesGrantedItemLinePartButtonReject button">
                        Reject
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
