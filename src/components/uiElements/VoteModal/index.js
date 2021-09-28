import React from 'react'
import { useState } from 'react'
import './style.css'


import Data from '../../../etc/data.json'

export default function VoteModal({showVoteModal, setShowVoteModal}) {


    const [voteValue, setVoteValue] = useState(false)

    const voteFunc = () => {
        alert('voteFunc')
        setShowVoteModal(false)
    }


    return (
        <React.Fragment>

            {showVoteModal ? 
            <div className="pageModalOverlay">

                <div className="lendPoolWindow">

                    <div className="lendPoolWindowHeader">
                        Vote

                        <div className="lendPoolWindowHeaderButton" onClick={() => setShowVoteModal(false)}>

                        </div>
                    </div>
                    <div className="lendPoolStep">
                        <div className="lendDetailsOwnerLineModal">

                            <div className="lendDetailsOwnerLineLeft">

                                <div className="lendDetailsOwnerIcon"></div>
                                <div className="lendDetailsOwnerName">{Data.voteModal.name}</div>
                                <div className="lendDetailsOwnerUsername">{Data.voteModal.username}</div>

                            </div>

                            <div className="lendDetailsOwnerLineRight">

                                <div className="lendDetailsPoolStatus lendDetailsPoolStatusRed">
                                {Data.voteModal.status}
                                </div>

                                

                

                            </div>

                            </div>
                       
                            <div className="lendDetailsVoteModalLine1">
                                Would you allow for a one time extension of this pool, until {Data.voteData.dateUntil}?
                            </div>

                            <div className="lendDetailsVoteModalPower">
                                <div className="lendDetailsVoteModalPowerLeft">
                                Your voting power
                                </div>
                                <div className="lendDetailsVoteModalPowerRight">
                                    {Data.voteModal.votingPower}
                                </div>
                            </div>

                            <div style={{marginTop: '5px'}} className="lendDetailsVoteModalPower">
                                    <div className="lendDetailsVoteModalPowerLeft">
                                        Quorum {Data.voteModal.quorum}
                                    </div>
                                    <div className="lendDetailsVoteModalPowerRight">
                                       {Data.voteModal.needed} needed
                                    </div>
                                </div>

                            <div className="lendDetailsVoteModalItem">
                                <div className="lendDetailsVoteModalItemLeft">
                                    <div className="lendDetailsVoteModalItemLeftTop">
                                        <div className="lendDetailsVoteModalItemLeftTopLeft">
                                        For
                                        </div>   
                                        <div className="lendDetailsVoteModalItemLeftTopRight">
                                        {Data.voteModal.for}
                                        </div>  
                                    </div>   
                                    <div className="lendDetailsVoteModalItemLeftBottom">
                                        <div className="lendDetailsVoteModalItemLeftBottomOuter">
                                            <div style={{width: `${Data.voteModal.progress}%`}} className="lendDetailsVoteModalItemLeftBottomInner lendDetailsVoteModalItemLeftBottomInnerGreen">
                                                
                                            </div>
                                        </div>
                                    </div>   
                                </div>   
                                <div className="lendDetailsVoteModalItemRight">
                                    <input type="checkbox" checked={voteValue ? "checked" : ""}  onChange={() => setVoteValue(prev => !prev)} />
                                </div>     
                            </div>    
                     
                        
                     
                            <div className="lendPoolStepModalLineButton button" onClick={voteFunc}>
                                Vote
                            </div>

            


                        
                    </div>
                </div>
            </div>

            :null}
                    
            </React.Fragment>
    )
}
