import React from 'react'
import {useEffect, useState} from 'react'
import './style.css'
import Web3 from 'web3'
import { useHistory } from 'react-router-dom'

export default function Access() {

    const history = useHistory()

    const [walletAddr, setWalletAddr] = useState(localStorage.addr)
    const [accessGranted, setAccessGranted] = useState(false)
    const [metaConnected, setMetaConnected] = useState(false)

     //Metamask connection func
     const loadWeb3 = () => {
        if(window.ethereum){
            window.web3 = new Web3(window.ethereum)
            window.ethereum.enable()
                .then(info => {
                    window.web3.eth.getAccounts()
                        .then(accounts => {
                            setWalletAddr(accounts[0])
                            localStorage.setItem("addr", accounts[0])
                            setMetaConnected(true)
                            checkAccessGranted(accounts[0])
                })
            })
        }else{
            alert("Please install Metamask")
        }
    }

    const checkAccessGranted = (addr) => {
        if(addr){
            localStorage.setItem("accessGranted", true)
            setAccessGranted(true)
        }
    }



    useEffect(() => {
        
        if(localStorage.addr){
            setMetaConnected(true)
            setWalletAddr(localStorage.addr)
            checkAccessGranted(localStorage.addr)
        }

        if(window.ethereum){
            window.ethereum.on("accountsChanged", accounts => {
                if (accounts.length > 0){
                  localStorage.setItem("addr", accounts[0])
                  setWalletAddr(accounts[0])
                  setMetaConnected(true)
                  checkAccessGranted(accounts[0])
                }else{
                  setWalletAddr('')
                  setAccessGranted(false)
                  setMetaConnected(false)
                  localStorage.removeItem("addr");
                  localStorage.removeItem("accessGranted")
                }
              });
        }

        if(localStorage.accessGranted === true && localStorage.addr){
            history.push('/dashboard')
        }

    }, []);



    return (
        <React.Fragment>
            
            <div className="accessPage">
                            <div className="accessPageBox">
                                <div className="accessPageBoxLogo">
                                
                                </div>
                               
                                <div className={ metaConnected ? accessGranted ? 'accessConnectButton button accessConnectButtonGreen' : 'accessConnectButton button accessConnectButtonOrange' : 'accessConnectButton button' } onClick={() => loadWeb3()}>
                                    {metaConnected ? accessGranted ? 'Access Granted' : 'You don’t have access' :  'Connect Metamask' }
                                </div>
                                <div className={accessGranted ? "enterAppButton button" : "enterAppButton button buttonInactive"} onClick={()=>history.push('/dashboard')}>
                                    Enter App
                                </div>
                                <div className={accessGranted || !metaConnected ? "requestAccessButton button buttonInactive" : "requestAccessButton button"} onClick={()=>history.push('/requestaccess')}>
                                    Request Access
                                </div>
                               
                            </div>
                        </div>


        </React.Fragment>
    )
}
