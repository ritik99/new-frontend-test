import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'


export default function LendPoolCard({setShowLendModal, data, size}) {

    const history = useHistory();

    const poolStatus = {
        status_1 : 'Active',
        status_2 : 'Collecting',
        status_3 : 'Closed',
        status_4 : 'Defaulted',
        status_5 : 'Cancelled',
        status_6 : 'Terminated',
        
    }

    const viewMoreFunc = () => {
        if(data.poolStatus === 'Collecting'){
            history.push('/lend-pool-details-collecting');
        }else{
            history.push('/lend-pool-details-grace');
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
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCollecting">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_3 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusClosed">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_4 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusDefaulted">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_5 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusCancelled">
                                {data.poolStatus}
                            </div> : ''
                        }

                        {data.poolStatus === poolStatus.status_6 ? 
                            <div className="poolCardUserPoolStatus poolCardUserPoolStatusTerminated">
                                {data.poolStatus}
                            </div> : ''
                        }

                                   
                    </div>


                </div>
            




                {data.poolStatus === poolStatus.status_1 ? 

                    <React.Fragment>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrowed
                        </div>
                        <div className="poolCardLineValue">
                        {data.borrowed}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.repaymentProgress}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.repaymentProgress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {data.lent}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Estimated end date
                        </div>
                        <div className="poolCardLineValue">
                        {data.estimatedEndDate}
                        </div>
                    </div>

                    <div className="poolCardButton poolCardButtonView" onClick={viewMoreFunc}>
                            View more
                    </div>
                    </React.Fragment>

                    : ''
                
                }


                {data.poolStatus === poolStatus.status_2 ? 

                    <React.Fragment>

                    {data.participating  === false ? 


                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrow Rate
                        </div>
                        <div className="poolCardLineValue">
                        {data.borrowRate}
                        </div>
                    </div>
                    
                    
                    : ''}

                    

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Borrowing
                        </div>
                        <div className="poolCardLineValue">
                        {data.borrowing}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Locked collateral
                        </div>
                        <div className="poolCardLineValue">
                        {data.lockedCollateral}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Collection progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.collectionProgress}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.collectionProgress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    {data.participating  === true ?

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {data.lent}
                        </div>
                    </div>
                    
                    : ''
                    
                    }

                    <div className="poolCardButtonWrapper">
                            <div className="poolCardButton poolCardButtonLend poolCardButtonHalf" onClick={() => setShowLendModal(true)}>
                                    Lend more
                            </div>
                            <div className="poolCardButton poolCardButtonView poolCardButtonHalf" onClick={viewMoreFunc}>
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
                        Repayment progress
                        </div>
                        <div className="poolCardLineValue">
                        {data.repaymentProgress}

                            <div className="poolCardProgressLine">
                                <div style={{width: data.repaymentProgress}} className="poolCardProgressLineInner">
                                
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        You lent
                        </div>
                        <div className="poolCardLineValue poolCardLineValueLent">
                        {data.lent}
                        </div>
                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Profit
                        </div>
                        {data.profit >= 0 ? 
                        
                        <div className="poolCardLineValue poolCardLineValueProfitGreen">

                            +{data.profit} DOT
                        
                        </div>

                        :
                        
                        <div className="poolCardLineValue poolCardLineValueProfitRed">

                            {data.profit} DOT
                        
                        </div>

                        }

                        </div>

                        <div className="poolCardLine">
                            <div className="poolCardLineHint">
                            Ended on
                            </div>
                            <div className="poolCardLineValue">
                            {data.endedOn}
                            </div>
                        </div>
                        
                    

                    <div className="poolCardButton poolCardButtonView" onClick={viewMoreFunc}>
                            View more
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
                    {data.repaymentProgress}

                        <div className="poolCardProgressLine">
                            <div style={{width: data.repaymentProgress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {data.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {data.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{data.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {data.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endedOn}
                        </div>
                    </div>
                    


                <div className="poolCardButton poolCardButtonView" onClick={viewMoreFunc}>
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
                    {data.repaymentProgress}

                        <div className="poolCardProgressLine">
                            <div style={{width: data.repaymentProgress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {data.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {data.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{data.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {data.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endedOn}
                        </div>
                    </div>
                    


                <div className="poolCardButton poolCardButtonView" onClick={viewMoreFunc}>
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
                    {data.repaymentProgress}

                        <div className="poolCardProgressLine">
                            <div style={{width: data.repaymentProgress}} className="poolCardProgressLineInner">
                            
                            </div>
                        </div>

                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    You lent
                    </div>
                    <div className="poolCardLineValue poolCardLineValueLent">
                    {data.lent}
                    </div>
                </div>

                <div className="poolCardLine">
                    <div className="poolCardLineHint">
                    Profit
                    </div>
                    {data.profit >= 0 ? 
                    
                    <div className="poolCardLineValue poolCardLineValueProfitGreen">

                        +{data.profit} DOT
                    
                    </div>

                    :
                    
                    <div className="poolCardLineValue poolCardLineValueProfitRed">

                        {data.profit} DOT
                    
                    </div>

                    }

                    </div>

                    <div className="poolCardLine">
                        <div className="poolCardLineHint">
                        Ended on
                        </div>
                        <div className="poolCardLineValue">
                        {data.endedOn}
                        </div>
                    </div>
                    


                <div className="poolCardButton poolCardButtonView" onClick={viewMoreFunc}>
                        View more
                </div>
                    
                    

                </React.Fragment>

                : ''

                }


            </div>
        </React.Fragment>
    )
}
