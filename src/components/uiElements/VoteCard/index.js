import React from 'react'
import './style.css'

export default function VoteCard({data, setShowVoteModal}) {
    return (
        <React.Fragment>
            <div className="voteCard">
                <div className="voteCardAvatar">
                
                </div>

                <div className="voteCardTitle">
                {data.title}
                </div>

                <div className="voteCardUsername">
                {data.username}
                </div>

                <div className="voteCardDate">
                {data.date}
                </div>

                <div className="voteCardButtons">
                    <div className="voteCardButton voteCardButtonVote button" onClick={() => setShowVoteModal(true)}>
                        Vote
                    </div>
                    <div className="voteCardButton voteCardButtonDismiss button" onClick={() => alert("Remove card")}>
                        Dismiss
                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}
