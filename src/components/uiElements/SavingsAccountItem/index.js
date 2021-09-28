import React from 'react'
import {useState} from 'react'
import './style.css'

export default function SavingsAccountItem({data, changeSelectedAsset, itemKey, selected, setSelected}) {

 

    const itemClick = (data) => {
        changeSelectedAsset(data);
        setSelected(itemKey);
    }

    return (
        <div className={selected === itemKey ? "creditLinesSaveItemLine creditLinesSaveItemLineSelected button" : "creditLinesSaveItemLine button"} onClick={() => {itemClick(data)}}>
           
        <div className="creditLinesSaveItemLinePart creditLinesSaveItemLinePart1">
        <img src={data.logo} className="creditLinesSaveItemLineIcon" />
        {data.assetName}
        </div>
        <div className="creditLinesSaveItemLinePart">
        {data.deposited}
            <div className="creditLinesSaveItemLinePartHint">
            {data.depositedUsd}
            </div>
        </div>
        <div className="creditLinesSaveItemLinePart">
        {data.rate}
        </div>
        <div className="creditLinesSaveItemLinePart">
        {data.interest}
        <div className="creditLinesSaveItemLinePartHint">
        {data.interestUsd}
            </div>
        </div>
        
        
    </div>
    )
}
