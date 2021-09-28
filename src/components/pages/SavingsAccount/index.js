import React from 'react'
import {useState} from 'react'
import './style.css'
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import SavingsAccountItem from '../../uiElements/SavingsAccountItem'
import SavingsAccountTab from '../../uiElements/Tabs/SavingsAccountTabs'

export default function  SavingsAccount() {
    const totalValues = {
        deposited: '$0.00',
        interestEarned: '$0.00'
    }

    const deposit = (data, strategy) => {
        alert("Deposit "  + data + ' ' + selectedAsset.assetName)
    }

    const withdraw = (data, strategy) => {
        alert("Withdraw " + data + ' ' + selectedAsset.assetName)
    }

    const creditLinesSaveItemData = [
        {
            assetName: 'COMP',
            logo: 'https://cryptologos.cc/logos/compound-comp-logo.png',
            balance: '1,500 COMP',
            deposited: '1,000 COMP',
            depositedUsd: '$2240.20',
            rate: '10.5%',
            interest: '500 COMP',
            interestUsd: '$865.00',
            depositFee: '0.17 ETH',
            withdrawFee: '0.18 ETH',
            depositFeeUsd: '$12.25',
            withdrawFeeUsd: '$10.90',
        },
        {
            assetName: 'AAVE',
            balance: '5,200 AAVE',
            logo: 'https://cryptologos.cc/logos/aave-aave-logo.png',
            deposited: '3,500 AAVE',
            depositedUsd: '$2240.20',
            rate: '7.5%',
            interest: '1500 AAVE',
            interestUsd: '$865.00',
            depositFee: '0.21 ETH',
            withdrawFee: '0.22 ETH',
            depositFeeUsd: '$12.25',
            withdrawFeeUsd: '$10.90',
        },
    ]

    const [selectedAsset, setSelectedAsset] = useState(creditLinesSaveItemData[0]);

    const changeSelectedAsset = (data) => {
        setSelectedAsset(data);
        setDepositAmount(0);
        setWithdrawAmount(0);
    }

    const [selected, setSelected] = useState('');

    const [depositAmount, setDepositAmount] = useState('')
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    return (
        <React.Fragment>
            <Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperCreditLinesSave">
                    <div className="CreditLinesSaveLeft">
                        <div className="pageTitle">
                            Save
                        </div>
                        <div className="cardsWrapper">
                            <div  className="dashboardCard dashboardCard2x">
                                <div className="dashboardCardValue">
                                    {totalValues.deposited}
                                </div>
                                <div className="dashboardCardHint">
                                    Deposited
                                </div>
                            </div>
                            <div  className="dashboardCard dashboardCard2x">
                                <div className="dashboardCardValue">
                                    {totalValues.interestEarned}
                                </div>
                                <div className="dashboardCardHint">
                                    Interest Earned
                                </div>

                            </div>
                        </div>
                        <div className="creditLinesTable">
                            <div className="creditLinesTableTop">
                                <div className="creditLinesTableTopItem creditLinesTableTopItemLeft creditLinesTableTopItem4x">
                                All Assets
                                </div>
                                <div className="creditLinesTableTopItem creditLinesTableTopItem4x">
                                Deposited
                                </div>
                                <div className="creditLinesTableTopItem creditLinesTableTopItem4x">
                                Rate
                                </div>
                                <div className="creditLinesTableTopItem creditLinesTableTopItem4x">
                                Interest Earned
                                </div>
                            </div>
                            <div className="savingAccountTableWrapper">
                            {creditLinesSaveItemData.map((item, index) => (
                                <SavingsAccountItem
                                    key={index}
                                    data={item}
                                    changeSelectedAsset={changeSelectedAsset}
                                    itemKey={index}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="CreditLinesSaveRight">
                        <div className="CreditLinesSaveRightTitle">
                            {selectedAsset.assetName}
                        </div>
                        <SavingsAccountTab
                            deposit={deposit}
                            withdraw={withdraw}
                            data={selectedAsset}
                            depositAmount={depositAmount}
                            setDepositAmount={setDepositAmount}
                            withdrawAmount={withdrawAmount}
                            setWithdrawAmount={setWithdrawAmount}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
