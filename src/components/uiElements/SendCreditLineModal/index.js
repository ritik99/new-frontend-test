import React from 'react'
import { useState } from 'react'
import './style.css'
import DropdownMenu from '../DropdownMenu'

export default function SendCreditLineModal({showSendCreditLineModal, setShowSendCreditLineModal }) {

    const [creditLineAddr , setCreditLineAddr] = useState('')
    const [ borrowLimit, setBorrowLimit] = useState('')
    
    const [ collateralRatio, setCollateralRatio] = useState('')
 
    const [liquidationThreshold , setLiquidationThreshold] = useState('')
    const [ interestRate, setInterestRate] = useState('')
    const [ autoliquidate, setAutoliquidate ] = useState('')

    const sendCreditLineRequest = () => {
        alert('sendCreditLineRequest')
        setShowSendCreditLineModal(false)
    }
    
    const [borrowAssetDropdownList, setBorrowAssetDropdownList] = useState([{key: 'option1', value: 'Option 1' }, {key: 'option2', value: 'Option 2' }])
    const [collateralAssetDropdownList, setCollateralAssetDropdownList] = useState([{key: 'option1', value: 'Option 1' }, {key: 'option2', value: 'Option 2' }])

    const [ borrowAsset, setBorrowAsset] = useState(borrowAssetDropdownList[0])
    const [ collateralAsset, setCollateralAsset] = useState(collateralAssetDropdownList[0])

    return (
        <React.Fragment>
        {showSendCreditLineModal ?
            <div className="pageModalOverlay">

                <div className="borrowPoolWindow">

                    <div className="borrowPoolWindowHeader">
                        Request a line of Credit

                        <div className="borrowPoolWindowHeaderButton" onClick={() => setShowSendCreditLineModal(false)}>

                        </div>
                    </div>


                    <div className="borrowPoolStep">

                        <div className="sendCreditLineModalAddr">
                            <div className="sendCreditLineModalAddrHint">
                                Credit Line Lender Address
                            </div>
                            <input type="text" className="sendCreditLineModalAddrInput" value={creditLineAddr} onChange={e => {setCreditLineAddr(e.target.value)}} placeholder="Enter the blockchain address" />
                        </div>

                        <div className="sendCreditLineModalLinesWrapper">

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Borrow Limit
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={borrowLimit}  onChange={e => {setBorrowLimit(e.target.value)}} />
                        </div>

                     
                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Borrow Asset
                            </div>
                            <DropdownMenu
                                dropdownSelected={borrowAsset}
                                setDropdownSelected={setBorrowAsset}
                                dropdownData={borrowAssetDropdownList}
                            />
                            </div>


                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Collateral Ratio
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={collateralRatio} onChange={e => {setCollateralRatio(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Collateral Asset
                            </div>
                            <DropdownMenu
                                dropdownSelected={collateralAsset}
                                setDropdownSelected={setCollateralAsset}
                                dropdownData={collateralAssetDropdownList}
                            />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Liquidation Threshold
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={liquidationThreshold} onChange={e => {setLiquidationThreshold(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper">
                            <div className="sendCreditLineModalHint">
                            Interest Rate
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={interestRate} onChange={e => {setInterestRate(e.target.value)}} />
                        </div>

                        <div className="sendCreditLineModalWrapper sendCreditLineModalWrapperBig">
                            <div className="sendCreditLineModalHint">
                            Autoliquidate
                            </div>
                            <input type="text" className="sendCreditLineModalInput" value={autoliquidate} onChange={e => {setAutoliquidate(e.target.value)}} />
                        </div>


                        </div>

                        <div className="borrowPoolStepModalLineButton button" onClick={sendCreditLineRequest}>
                            Send Credit Line Request
                        </div>






                   </div>
                </div>

            </div>
            : null
        }
        
    </React.Fragment>
    )
}
