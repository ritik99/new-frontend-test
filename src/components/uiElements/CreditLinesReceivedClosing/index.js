import React from 'react'
import { useState } from 'react'

import './style.css'

export default function CreditLinesReceivedClosing({showClosingModal, rejectFunc, approveFunc}) {

 

    return (
        <React.Fragment>
            {showClosingModal
            ?
            <div className="pageModalOverlay pageModalOverlayMain">
            <div className="borrowPoolWindow borrowPoolWindowClosing">
                <div className="borrowPoolWindowHeader">
                    Are you sure you wish to close the credit line?
                    </div>

                        <div className="closingButtons">
                            <div onClick={() => {rejectFunc()}} className="closingButton button">
                            Reject
                            </div>
                            <div onClick={() => {approveFunc()}} className="closingButton button">
                            Approve
                            </div>
                        </div>

                    </div>
                </div>

        :
        null}
      </React.Fragment>
    )
}
