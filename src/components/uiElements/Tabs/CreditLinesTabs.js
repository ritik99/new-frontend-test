import React from 'react'
import { useEffect, useState,useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CreditLinesGrantedItem from '../CreditLinesGrantedItem';
import CreditLinesReceivedItem from '../CreditLinesReceivedItem'
import './creditLinesTabs.css'
import CreditLinesRequestSentItem from '../CreditLinesRequestSentItem'
import CreditLineRequestSent from '../CreditLineRequestSent'
import CreditLinesClosing from '../CreditLinesClosing'
import CreditLinesRequestReceivedItem from '../CreditLinesRequestReceivedItem'

import CreditLineRequestReceived from '../CreditLineRequestReceived'
import CreditLinesReceivedClosing from '../CreditLinesReceivedClosing'



import Data from '../../../etc/data.json'



export default function CreditLinesTabs({setShowSendCreditLineModal, tabSelected}) {

    const history = useHistory();

    const [toggleState, setToggleState] = useState(1);

    
  



    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [pendingCreditLineValue,setCreditLinePending] = useState([])
    const [creditLineGrantedValue,setCreditLineGranted] = useState([])
    const [creditLineRecievedValue,setCreditLineRecieved] = useState([]) 

    useEffect(() => {

        if(tabSelected === 'received'){
            setToggleState(1)
        }
    
        if(tabSelected === 'granted'){
            setToggleState(2)
        }
    
        if(tabSelected === 'pending'){
            setToggleState(3)
        }
        
    });



    //PENDING ITEMS PARAMS
    const [showDetailsSent, setShowDetailsSent] = useState(false)
    const [showDetailsReceived, setShowDetailsReceived] = useState(false)

    const [showClosingModal, setShowClosingModal] = useState(false)
    const [showClosingModalReceived, setShowClosingModalReceived] = useState(false)

    const sendCreditLineRequestCancel = () => {
        setShowDetailsSent(false)
        setShowClosingModal(false)
    }

    const sendCreditLineRequestCancelReceived = () => {
        setShowDetailsSent(false)
        setShowClosingModal(false)
    }

    const [requestSentSelectedData, setRequestSentSelectedData] = useState({})

    const openItem = () => {
        setRequestSentSelectedData({
            creditLimit: 1,
            borrowAsset: 2,
            interestRate:3,
            idealCollateralRatio:4,
            collateralAsset:5,
            liquidationThreshold:6,
            autoliquidate:7,
            username: 'Hello Name',
            addr: '0xC7IX'
        })
 
        setShowDetailsSent(true)
    }

    const [requestReceivedSelectedData, setRequestReceivedSelectedData] = useState({})

    const openItemReceived = () => {
        setRequestReceivedSelectedData({
            creditLimit: 1,
            borrowAsset: 2,
            interestRate:3,
            idealCollateralRatio:4,
            collateralAsset:5,
            liquidationThreshold:6,
            autoliquidate:7,
            username: 'Hello Name',
            addr: '0xC7IX'
        })

        setShowDetailsReceived(true)
    }

    const approveFunc = () => {
        alert('approveFunc')
        setShowDetailsReceived(false)
        setShowClosingModalReceived(false)
    }
    const rejectFunc = () => {
        alert('rejectFunc')
        setShowDetailsReceived(false)
        setShowClosingModalReceived(false)
    }



 
    return (
        <React.Fragment>

          


            <div className="creditLinesTabsLineWrapper">
                <div className="creditLinesTabsLine">
                    <div className={toggleState === 1 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => { history.push('/credit-lines/received') } }>
                    Received
                    </div>
                    <div className={toggleState === 2 ? "creditLinesTabItemActive" : "creditLinesTabItem"} onClick={ () => { history.push('/credit-lines/granted') } }>
                    Granted
                    </div>
                    <div className={toggleState === 3 ? "creditLinesTabItemActive" : "creditLinesTabItem"}onClick={ () => { history.push('/credit-lines/pending') } }>
                    Pending
                    </div>
                </div>
            </div>


            <div className="creditLinesTabsContentWrapper">



                <div className={toggleState === 1 ? "tabsContentActive" : "tabsContent"}>





                <div className="creditLinesAdditionalLine">
                        <div className="creditLinesAdditionalLineButton creditLinesAdditionalLineButton2 button" onClick={() => setShowSendCreditLineModal(true)}>Request a Credit Line</div>
                        <div className="creditLinesAdditionalLineButton button" onClick={() => setShowSendCreditLineModal(true)}>Send a Credit Line</div>
                        <div className="creditLinesAdditionalLineSpacer"></div>
                        <div className="lendTabSearch">
                            <input className="lendTabSearchField" type="text" placeholder="Search" />
                            <div className="lendTabSearchIcon">

                            </div>
                        </div>
                    </div>

                    <div className="creditLinesTable">
                        <div className="creditLinesTableTop">
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Address
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Borrow Limit
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Asset
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Interest Rate
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Liquidation Threshold
                            </div>
                        </div>

                     
                     
                       
                            <CreditLinesReceivedItem />

                       

                    
                
                    </div>



          

                </div>

                <div className={toggleState === 2 ? "tabsContentActive" : "tabsContent"}>


                    

                <div className="creditLinesAdditionalLine">
                        <div className="creditLinesAdditionalLineButton button" onClick={() => setShowSendCreditLineModal(true)}>Request a Credit Line</div>
                        <div className="creditLinesAdditionalLineButton button" onClick={() => setShowSendCreditLineModal(true)}>Send a Credit Line</div>
                        <div className="creditLinesAdditionalLineSpacer"></div>
                        <div className="lendTabSearch">
                            <input className="lendTabSearchField" type="text" placeholder="Search" />
                            <div className="lendTabSearchIcon">

                            </div>
                        </div>
                    </div>

                    <div className="creditLinesTable">
                        <div className="creditLinesTableTop">
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Address
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Borrow Limit
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Asset
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Interest Rate
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Collateral Ratio
                            </div>
                            <div className="creditLinesTableTopItem creditLinesTableTopItem6x">
                            Liquidation Threshold
                            </div>
                        </div>


                       
                        <CreditLinesReceivedItem />

                    
                
                    </div>



                

                </div>

                <div className={toggleState === 3 ? "tabsContentActive" : "tabsContent"}>



                <div className="creditLinesAdditionalLine">
                    

                    <div className="lendTabSearch">
                        <input className="lendTabSearchField" type="text" placeholder="Search" />
                        <div className="lendTabSearchIcon">

                        </div>
                    </div>
                </div>

                <div className="creditLinesPending">
                <div className="creditLinesPendingLeft">
                <div className="creditLinesTitle">
                    Requests Received
                </div>
                <div className="creditLinesTable">
                    <div className="creditLinesTableTop">
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Address
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Borrow Limit
                        </div>
                     
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Interest Rate
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Collateral Ratio
                        </div>
       
                     
                     
                    </div>

                  
                    <CreditLinesRequestReceivedItem openItem={openItemReceived}  setShowDetailsSent={showDetailsReceived} setShowClosingModal={setShowClosingModalReceived} data = {requestReceivedSelectedData} />
                            
                            {
                            showDetailsReceived ?
                                <CreditLineRequestReceived setShowDetailsReceived={setShowDetailsReceived} rejectFunc={rejectFunc} approveFunc={approveFunc} showDetailsSent={showDetailsReceived} setShowClosingModal={setShowClosingModalReceived} data = {requestReceivedSelectedData} />
                            :
                            null
                            }

                           

                           
               
                </div>

               
                    
                </div>
                <div className="creditLinesPendingRight">
                <div className="creditLinesTitle">
                    Requests Sent
                </div>


             

                    <div className="creditLinesTable">
                    <div className="creditLinesTableTop">
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Address
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Borrow Limit
                        </div>
                     
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Interest Rate
                        </div>
                        <div className="creditLinesTableTopItem creditLinesTableTopItem9x">
                        Collateral Ratio
                        </div>
       
                     
                     
                    </div>

                   {pendingCreditLineValue.map((items, index) => (
                         <CreditLinesRequestSentItem openItem={openItem}  setShowDetailsSent={setShowDetailsSent} setShowClosingModal={setShowClosingModal} data = {requestSentSelectedData}/>
                    ))} 


                        <CreditLinesRequestSentItem openItem={openItem}  setShowDetailsSent={setShowDetailsSent} setShowClosingModal={setShowClosingModal} data = {requestSentSelectedData}/>
               
                        <CreditLinesClosing showClosingModal={showClosingModal} setShowClosingModal={setShowClosingModal} sendCreditLineRequestCancel={sendCreditLineRequestCancel} />
               
                         {
                            showDetailsSent ?
                                <CreditLineRequestSent showDetailsSent={showDetailsSent} setShowDetailsSent={setShowDetailsSent} setShowClosingModal={setShowClosingModal} data = {requestSentSelectedData} />
                            :
                            null
                        }
        
               
                </div>

                    

                    </div>
                </div>

              
     
                </div>

                </div>

            
        </React.Fragment>
    )
}
