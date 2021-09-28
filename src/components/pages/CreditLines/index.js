import React from 'react'
import './style.css'
import {useState} from 'react'
import { useParams } from "react-router-dom";
import Header from '../../uiElements/Header'
import Footer from '../../uiElements/Footer'
import CreditLinesTabs from '../../uiElements/Tabs/CreditLinesTabs'
import SendCreditLineModal from '../../uiElements/SendCreditLineModal'
import CreditLinesClosing from '../../uiElements/CreditLinesClosing'

export default function CreditLines() {

    const { tab } = useParams();

    const [showSendCreditLineModal, setShowSendCreditLineModal] = useState(false)

    const [isLoading, setIsLoading] = useState(false);

   //Hide Loading Screen setIsLoading(false);

 


    const [creditLineAddr, setCreditLineAddr] = useState('');
    const [borrowLimit, setBorrowLimit] = useState('');
    const [borrowAsset, setBorrowAsset] = useState('');
    const [collateralRatio, setCollateralRatio] = useState('');
    const [collateralAsset, setCollateralAsset] = useState('');
    const [liquidationThreshold, setLiquidationThreshold] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [autoliquidate, setAutoliquidate] = useState('');

 

    return (
        <React.Fragment>

<CreditLinesClosing />
<SendCreditLineModal showSendCreditLineModal={showSendCreditLineModal} setShowSendCreditLineModal={setShowSendCreditLineModal} />
<Header isLoading={isLoading} />
            <div className="pageOuter">
                <div className="pageWrapper pageWrapperPadding pageWrapperCreditLines">


                    <CreditLinesTabs tabSelected={tab} setShowSendCreditLineModal={setShowSendCreditLineModal} />


                </div>
            </div>
            <Footer />
            
        </React.Fragment>
    )
}
