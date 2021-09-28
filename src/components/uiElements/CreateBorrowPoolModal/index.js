import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import './style.css'
import DropdownMenu from '../DropdownMenu'





export default function CreateBorrowPoolModal({showCreateBorrowPoolModal, setShowCreateBorrowPoolModal}) {

    const history = useHistory();
    const [formStep, setFormStep] = useState(1);
    const setStep = (index) => {
        setFormStep(index);
    }





   //NEW
    const dropdownBorrowTokens = [
        {
            value: 'token 1',
        },
        {
            value: 'token 2'
        },
    ]
    const dropdownCollateralTokens = [
        {
            value: 'token 1',
        },
        {
            value: 'token 2'
        },
    ]
    const dropdownLoanPeriod = [
        {
            value: '1 week',
        },
        {
            value: '2 weeks',
        },
        {
            value: '3 weeks',
        },
        {
            value: '4 weeks',
        },
        {
            value: '5 weeks',
        },
    ]
    const dropdownRepayPeriod = [
        {
            value: '1 week',
        },
        {
            value: '2 weeks',
        },
        {
            value: '4 weeks',
        },
        {
            value: 'End on loan',
        }
    ]
    const dropdownRestrictLenderParticipation = [
        {
            value: 'Require verification via Twitter',  
        },
        {
            value: 'Require verification via Twitter',  
        }
    ]

    const [borrowAmount, setBorrowAmount] = useState()
    const [minBorrowAmount, setMinBorrowAmount] = useState()


    const [dropdownBorrowTokenSelected, setDropdownBorrowTokenSelected] = useState(dropdownBorrowTokens[0])

    const [dropdownCollateralTokenSelected, setDropdownCollateralTokenSelected] = useState(dropdownCollateralTokens[0])

    const [collaterizationRatio, setCollaterizationRatio] = useState()
    const [interestRate, setInterestRate] = useState()
    const [loanPeriod, setLoanPeriod] = useState(dropdownLoanPeriod[0])
    const changeLoanPeriod = (index) => {
        setLoanPeriod(index);
    }
    const [repaymentPeriod, setRepaymentPeriod] = useState(dropdownRepayPeriod[0])
    const changeRepaymentPeriod = (index) => {
        setRepaymentPeriod(index);
    }
    const [collectionPeriod, setCollectionPeriod] = useState()
    const [requiredCollateral, setRequiredCollateral] = useState()
    const [totalRepayment, setTotalRepayment] = useState()
    const [eachInstallment, setEachInstallment] = useState()
    const [totalInterest, setTotalInterest] = useState(0)
 

    const [volatilityThreshold, setVolatilityThreshold] = useState()
    const [restrictLenderParticipation, setRestrictLenderParticipation] = useState(dropdownRestrictLenderParticipation[0])
    const [collateralNeeded, setCollateralNeeded] = useState(0)
    const [totalDebt, setTotalDebt] = useState(0)
    const [interestRepaymentPerWeek, setInterestRepaymentPerWeek] = useState(0)

    const createPoolFunc = () => {
        alert('createPoolFunc');
        setShowCreateBorrowPoolModal(false)
        setStep(1)
    }

    return (
        <React.Fragment>
            {showCreateBorrowPoolModal ?
           
                <React.Fragment>
                { document.body.style.overflowY = 'hidden'}
                <div className="pageModalOverlay">
                    <div className="newCreateBorrowWindow">
                    <div className="newCreateBorrowWindowWrapper">
                        <div className="newCreateBorrowWindowTitle">
                        Basic
                        </div>
                        <div className="newCreateBorrowWindowLine">
                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Borrow Amount
                                </div>
                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter the Amount" onChange={e => setBorrowAmount(e.target.value)} value={borrowAmount} />
                            </div>



                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                Borrow Asset
                                </div>
                                <DropdownMenu
                                    dropdownSelected={dropdownBorrowTokenSelected}
                                    setDropdownSelected={setDropdownBorrowTokenSelected}
                                    dropdownData={dropdownBorrowTokens}
                                />
                            </div>



                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Collaterization Ratio
                                </div>
                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter Ratio (%)" value={collaterizationRatio} onChange={e => setCollaterizationRatio(e.target.value)} />
                               
                            </div>


                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Collateral Asset
                                </div>
                                <DropdownMenu
                                    dropdownSelected={dropdownCollateralTokenSelected}
                                    setDropdownSelected={setDropdownCollateralTokenSelected}
                                    dropdownData={dropdownCollateralTokens}
                                />
                            </div>


                            </div>
                            <div className="newCreateBorrowWindowLine">
                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Loan Period
                                </div>
                                <DropdownMenu
                                    dropdownSelected={loanPeriod}
                                    setDropdownSelected={setLoanPeriod}
                                    dropdownData={dropdownLoanPeriod}
                                />
                            </div>



                            <div className="newCreateBorrowWindowItem">
                            <div className="newCreateBorrowWindowItemTitle">
                                    Repayment Period
                                </div>
                                <DropdownMenu
                                    dropdownSelected={repaymentPeriod}
                                    setDropdownSelected={setRepaymentPeriod}
                                    dropdownData={dropdownRepayPeriod}
                                />
                                
                            </div>



                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Minimum Borrow Amount
                                </div>
                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter the Amount" onChange={e => setMinBorrowAmount(e.target.value)} value={minBorrowAmount} />
                            </div>





                        </div>
                    

                        <div className="newCreateBorrowWindowTitle">
                            Advanced
                        </div>



                        <div className="newCreateBorrowWindowLine">
                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Interest Rate
                                </div>
                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter Rate (%)" value={interestRate} onChange={e => {setInterestRate(e.target.value)}} />
                            </div>



                            <div className="newCreateBorrowWindowItem">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Volatility Threshold
                                </div>
                                <input type="text" className="borrowPoolAmountAreaField" placeholder="Enter Volatility" value={volatilityThreshold} onChange={e => {setVolatilityThreshold(e.target.value)}} />
                            </div>


                            <div className="newCreateBorrowWindowItem newCreateBorrowWindowItemBig">
                                <div className="newCreateBorrowWindowItemTitle">
                                    Restrict Lender Participation
                                </div>
                                <DropdownMenu
                                    dropdownSelected={restrictLenderParticipation}
                                    setDropdownSelected={setRestrictLenderParticipation}
                                    dropdownData={dropdownRestrictLenderParticipation}
                                />
                            </div>


                        </div>
                    
                    
                        <div className="newCreateBorrowWindowBadge">
                            <div className="newCreateBorrowWindowBadgeItem">
                                Collateral needed <span>{collateralNeeded}</span> USDC
                            </div>

                            <div className="newCreateBorrowWindowBadgeItem">
                                Total debt <span>{totalDebt}</span> USDC
                            </div>


                            <div className="newCreateBorrowWindowBadgeItem">
                                Total interest <span>{totalInterest}</span> USDC
                            </div>

                            <div className="newCreateBorrowWindowBadgeItem">
                                Interest repayment per week <span>{interestRepaymentPerWeek}</span>%
                            </div>
                        </div>


                        
                        <div className="borrowPoolButtonsWrapper borrowPoolButtonsWrapperNew">
                            <div className="borrowPoolSmallButton borrowPoolBackButton" onClick={() => setShowCreateBorrowPoolModal(false)}>Cancel</div>
                                <div
                                    className="borrowPoolSmallButton borrowPoolNextButton"
                                    onClick={() =>  createPoolFunc()}
                                >
                                Create Pool
                                </div>
                            </div>
                    </div>
                </div>
</div>
              </React.Fragment>
                : 
               
                <div onClick={document.body.style.overflowY = "auto"}></div>    
                
               
            }
        </React.Fragment>
    )
}
