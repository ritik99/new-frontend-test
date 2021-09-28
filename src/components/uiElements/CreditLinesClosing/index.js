import React from 'react'
import { useState } from 'react'

import './style.css'

export default function CreditLinesClosing({showClosingModal, setShowClosingModal, sendCreditLineRequestCancel}) {

 

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
                            <div onClick={() => {setShowClosingModal(false)}} className="closingButton button">
                            No
                            </div>
                            <div onClick={() => {sendCreditLineRequestCancel()}} className="closingButton button">
                            Yes
                            </div>
                        </div>

                    </div>
                </div>

        :
        null}
      </React.Fragment>
    )
}
