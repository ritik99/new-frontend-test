import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import TwitterModal from '../TwitterModal'
import { twitterDetails } from '../../../utility/subgraph/queries';
import { detectAccountChange, getActiveAccount } from "../../../utility/account/account";



export default function Header({isLoading}) {




    const history = useHistory();


    
    useEffect(() => {
        
        if(!localStorage.accessGranted){
            history.push('/access')
        }

        
        if(window.ethereum){
            window.ethereum.on("accountsChanged", accounts => {
                if (accounts.length > 0){
                    localStorage.removeItem("addr");
                    localStorage.removeItem("accessGranted")
                    history.push('/access')
                }else{
                  localStorage.removeItem("addr");
                  localStorage.removeItem("accessGranted")
                  history.push('/access')
                }
              });
        }


    },[])


    return (
        <React.Fragment>

            




            <div className="header">
                <div className="headerWrapper">

                    <div className="headerLogo icon" onClick={ () => { history.push('/dashboard') } }>
                        
                    </div>

                    <div className="headerMenu">
                        <div className={ history.location.pathname === '/dashboard' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/dashboard') } }>
                            Dashboard
                        </div>

                        <div className={ history.location.pathname === '/borrow' || history.location.pathname === '/lend' ? "headerMenuItemActive headerMenuItem2" : "headerMenuItem headerMenuItem2" } >
                            Pools
                            <div className="headerSubMenu">
                                <div className="headerSubMenuLine" onClick={ () => { history.push('/borrow') } }>
                                    Borrow
                                </div> 
                                <div className="headerSubMenuLine headerSubMenuLine2" onClick={ () => { history.push('/lend') } }>
                                    Lend
                                </div> 
                            </div>
                        </div>

                        <div className={ history.location.pathname === '/credit-lines' || history.location.pathname === '/credit-lines/granted' || history.location.pathname === '/credit-lines/received' || history.location.pathname === '/credit-lines/pending' ? "headerMenuItemActive headerMenuItem3" : "headerMenuItem headerMenuItem3" } >
                            Credit Lines
                            <div className="headerSubMenu headerSubMenu2">
                                <div className="headerSubMenuLine" onClick={ () => { history.push('/credit-lines/received') } }>
                                    Received
                                </div> 
                                <div className="headerSubMenuLine headerSubMenuLine2" onClick={ () => { history.push('/credit-lines/granted') } }>
                                    Granted
                                </div> 
                                <div className="headerSubMenuLine headerSubMenuLine3" onClick={ () => { history.push('/credit-lines/pending') } }>
                                    Pending
                                </div> 
                            </div>
                        </div>

                        <div className={ history.location.pathname === '/profile' ? "headerMenuItemActive" : "headerMenuItem" } onClick={ () => { history.push('/profile') } }>
                            Your Profile
                        </div>
                    </div>
                 


                    <div className="headerAddr">
                        {
                            localStorage.addr ? 
                            `${localStorage.addr.substring(0,7)}...${localStorage.addr.substring(37,42)}`
                            :
                            null

                        }
                    
                    </div>
                
                </div>
            </div>


        </React.Fragment>
    )
}
