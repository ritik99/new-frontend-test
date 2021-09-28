import React from 'react'
import { useState } from 'react'
import './CreditLinesSaveTabs.css'
import icon from './images/ETH.png'
import DropdownMenu from '../DropdownMenu'

export default function SavingsAccountTab({data, withdraw, deposit, depositAmount, setDepositAmount, withdrawAmount, setWithdrawAmount}) {


    const dropdownData = [
        {
            value: 'ETH',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png'
        },
        {
            value: 'USDC',
            icon: 'https://messari.io/asset-images/4515ba15-2719-4183-b0ca-b9255d55b67e/128.png?v=2'
        },
    ]

    const [dropdownSelected, setDropdownSelected] = useState(dropdownData[0])
    const [dropdownSelected2, setDropdownSelected2] = useState(dropdownData[0])
    const [strategy, setStrategy] = useState('1')
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <React.Fragment>
            <div className="creditLinesTabsLineWrapper">
                <div className="creditLinesTabsLine creditLinesTabsLineSave">
                    <div className={toggleState === 1 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(1) }>
                    Overview
                    </div>
                    <div className={toggleState === 2 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(2) }>
                    Deposit
                    </div>
                    <div className={toggleState === 3 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => toggleTab(3) }>
                    Withdraw
                    </div>
                </div>
            </div>
            <div className="creditLinesTabsContentWrapper">
                <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>
                    <div className="creditLinesSaveGrayPad">
                        <div className="creditLinesSaveGrayPadTitle">
                        {data.assetName}
                        </div>
                        <div className="creditLinesSaveGrayPadLine">
                            <div className="creditLinesSaveGrayPadLineLeft">
                            Current Deposit
                            </div>
                            <div className="creditLinesSaveGrayPadLineRight">
                            {data.deposited}
                            </div>
                        </div>
                        <div className="creditLinesSaveGrayPadLine">
                            <div className="creditLinesSaveGrayPadLineLeft">
                            Interest Earned
                            </div>
                            <div className="creditLinesSaveGrayPadLineRight">
                            {data.interest}
                            </div>
                        </div>
                        <div className="creditLinesSaveGrayPadLine">
                            <div className="creditLinesSaveGrayPadLineLeft">
                            Current APR
                            </div>
                            <div className="creditLinesSaveGrayPadLineRight">
                            {data.rate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>
                    <div className="borrowPoolStepModalAmount borrowPoolStepModalAmountSave">
                        <div className="borrowPoolStepModalAmountTop">
                            <div className="borrowPoolStepModalAmountTopLeft">
                                Amount
                            </div>
                            <div className="borrowPoolStepModalAmountTopRight">
                            Balance: {data.balance}
                            </div>
                        </div>
                        <div className="borrowPoolStepModalAmountBottom">
                            <div className="borrowPoolStepModalAmountBottomLeft">
                            <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Amount you want to deposit" onChange={e => setDepositAmount(e.target.value)} value={depositAmount} />
                            </div>
                            <div className="borrowPoolStepModalAmountBottomRight">
                            </div>
                        </div>
                    </div>
                    <div className="creditLinesSaveDepositHint">
                        Choose a strategy
                    </div>
                    <DropdownMenu dropdownSelected={dropdownSelected} setDropdownSelected={setDropdownSelected} dropdownData={dropdownData} />
                    <div className="lendPoolStepModalLineButton button" onClick={() => {deposit(depositAmount)}}>
                        Deposit {data.assetName}
                    </div>
                    <div className="creditLinesSaveDepositHint2">
                       
                    </div>
                </div>
                <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>
                    <div className="borrowPoolStepModalAmount borrowPoolStepModalAmountSave">
                        <div className="borrowPoolStepModalAmountTop">
                            <div className="borrowPoolStepModalAmountTopLeft">
                                Amount
                            </div>
                            <div className="borrowPoolStepModalAmountTopRight">
                            Balance: {data.balance}
                            </div>
                        </div>
                        <div className="borrowPoolStepModalAmountBottom">
                            <div className="borrowPoolStepModalAmountBottomLeft">
                            <input type="text" className="borrowPoolStepModalAmountBottomLeftField" placeholder="Amount you want to withdraw" onChange={e => setWithdrawAmount(e.target.value)} value={withdrawAmount} />
                            </div>
                            <div className="borrowPoolStepModalAmountBottomRight">
                            </div>
                        </div>
                    </div>
                    <div className="creditLinesSaveDepositHint">
                        Choose a strategy
                    </div>
                    <DropdownMenu dropdownSelected={dropdownSelected2} setDropdownSelected={setDropdownSelected2} dropdownData={dropdownData} />
                    <div className="lendPoolStepModalLineButton button" onClick={() => {withdraw(withdrawAmount)}}>
                        Withdraw {data.assetName}
                    </div>
                    <div className="creditLinesSaveDepositHint2">
                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
