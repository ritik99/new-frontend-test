import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function Footer() {

    const history = useHistory();

    return (
        <React.Fragment>
            <div className="footer">
                <div className="pageWrapper footerWrapper">
                    <div className="footerLeft">
                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Terms & Agreements
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Blog
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                Privacy Policy
                        </div>

                        <div className="footerMenuItem" onClick={ () => history.push('/')}>
                                FAQ
                        </div>

                        <div className="footerMenuItem">
                                © 2021 Sublime
                        </div>
                    </div>
                    <div className="footerRight">
                        <div className="footerSocialItem footerSocialItemDiscord" onClick={ () => history.push('/')}>
                            
                        </div>
                        <div className="footerSocialItem footerSocialItemTwitter" onClick={ () => history.push('/')}>
                            
                        </div>
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
