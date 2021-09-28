import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function BorrowPoolCard({data, size, setShowRepayModal, setShowAddCollateralModal}) {

    const history = useHistory();

    const poolStatus = {
        status_1 : 'Active',
        status_2 : 'Grace Period',
        status_3 : 'Collecting',
        status_4 : 'Closed',
        status_5 : 'Defaulted',
        status_6 : 'Cancelled',
        status_7 : 'Terminated',
        
    }

    const repayFunc = () => {
        setShowRepayModal(true)
    }

    const addCollateralFunc = () => {
        setShowAddCollateralModal(true)
    }

    const viewMoreFunc = () => {
        if(data.poolStatus === 'Collecting'){
            history.push('/borrow-pool-details-collecting')
        }else{
            history.push('/borrow-pool-details-grace')
        }
    }   



    return (
        <React.Fragment>
            <div className={`poolCard poolCard${size}`}>
                <div className="poolCardUserLine">
                    <div className="poolCardUserAvatar">
                    
                    </div>
                    <div className="poolCardUserName">
                        {data.name}
                    </div>
                    <div className="poolCardUserUsername">
                        {data.username}
                    </div>

                    <div className="poolCardUserPoolDetails">
                        <div className="poolCardUserPoolType">
                            {data.poolType}
                        </div>

                        {data.poolStatus === poolStatus.status_1 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusActive">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_2 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusGrace">
                                {data.poolStatus}
                            </div> : ''
                        }


                        {data.poolStatus === poolStatus.status_3 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCollecting">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_4 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusClosed">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_5 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusDefaulted">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_6 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCancelled">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_7 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusTerminated">
                                {data.poolStatus}
                            </div> : ''
                        }

                        

                        
                        
                    </div>


                </div>
                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Borrow Rate
                    </div>
                    <div className="poolCardLineValue">
                    {data.borrowRate}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Borrowed Amount
                    </div>
                    <div className="poolCardLineValue">
                    {data.borrowedAmount}
                    </div>
                </div>



                {data.poolStatus === poolStatus.status_1 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Next Payment
                        </div>
                        <div className="poolCardLineValue">
                        {data.nextPayment}
                        </div>
                    </div>

                     <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.progressAndPayment}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardButtonWrapper">

                        <div className="poolCardButton poolCardButtonActive poolCardButtonHalf" onClick={ (e) => repayFunc() }>
                            Repay
                        </div>

                        <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={() => viewMoreFunc()}>
                            View more
                        </div>

                    </div>

                    </React.Fragment>

                    : ''
                
                }


                {data.poolStatus === poolStatus.status_2 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Next Payment
                        </div>
                        <div className="poolCardLineValue">
                        {data.nextPayment}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.progressAndPayment}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardButtonWrapper">

                        <div className="poolCardButton poolCardButtonRepay poolCardButtonHalf" onClick={ (e) => repayFunc() }>
                            Repay
                        </div>

                        <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={() => viewMoreFunc()}>
                            View more
                        </div>

                    </div>

                    

                    </React.Fragment>
            
                
                    : ''
                    
                }


                {data.poolStatus === poolStatus.status_3 ?


                    <React.Fragment>
                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Collection progress
                            </div>
                            <div className="poolCardLineValue">
                            {data.progressAndPayment}

                                <div className="poolCardProgressLine">
                                    <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                    
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ends in
                            </div>
                            <div className="poolCardLineValue">
                            {data.endsDate}
                            </div>
                        </div>
                        <div className="poolCardButtonWrapper">
                          
                                <div className="poolCardButton poolCardButtonAdd poolCardButtonHalf" onClick={addCollateralFunc}>
                                    Add collateral
                                </div>
                           
                            <div className="poolCardButton poolCardButtonView poolCardButtonHalf"  onClick={() => viewMoreFunc()}>
                                View more
                            </div>
                        </div>
                    </React.Fragment>

                    : ''
                
                }




                {data.poolStatus === poolStatus.status_4 ?


                    <React.Fragment>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Repayment progress
                            </div>
                            <div className="poolCardLineValue">
                            {data.progressAndPayment}

                                <div className="poolCardProgressLine">
                                    <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                    
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ended on
                            </div>
                            <div className="poolCardLineValue">
                            {data.endsDate}
                            </div>
                        </div>

                        <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc() }>
                            View more
                        </div>

                    </React.Fragment>
                    
                    : ''

                }




                {data.poolStatus === poolStatus.status_5 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.progressAndPayment}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endsDate}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc() }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }



                {data.poolStatus === poolStatus.status_6 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.progressAndPayment}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endsDate}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc() }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }



                {data.poolStatus === poolStatus.status_7 ?


                <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.progressAndPayment}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.progressAndPayment}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endsDate}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={ () => viewMoreFunc() }>
                        View more
                    </div>

                </React.Fragment>

                : ''

                }


            </div>
        </React.Fragment>
    )
}
