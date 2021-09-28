import React from 'react'
import { useState } from 'react'
import './style.css'
import {tweetSign} from './../../../contractTranscations/verificationSign'
import {verification} from './../../../contractTranscations/verifyTweet'
import request from 'request';
import { useHistory } from 'react-router-dom'
import { render } from '@testing-library/react';
import { useEffect } from 'react'


export default function TwitterModal({showTwitterModal, closeTwitterModal}) {

    // const [formStep, setFormStep] = useState(1)
    var user;
    const[url,seturl] = useState(window.location.href)


    let currentStep = 1;
    var webUrl = new URL(window.location.href);
    var username = webUrl.searchParams.get("username");

    if(username !=null && username!='TwitterAuthenticationFailed'){
        user = '@' + username
        currentStep = 3
        console.log(user,currentStep)
    }
    const [formStep, setFormStep] = useState(currentStep)
    const address = window.sessionStorage.getItem("address");

    const history = useHistory();

    if(address == null){
        history.push('/')
    }

    const [tweet,setTweet] = useState('')
    const [tweetId,setTweetId] = useState()
    const [veficationDone,setVeficationDone] = useState(false)

    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
      charactersLength)));
       }
       return result.join('');
    }
    function oauth(){
        var c = makeid(17)
        window.location.href = "https://2wj5ed8tda.execute-api.us-east-1.amazonaws.com/default/my-func?type=request_token&nonce="+c
    }

    function verify(){

        console.log(address)
        if(!user) return
        verification(tweetId,address,setVeficationDone,user)
        closeTwitterModal();
        setFormStep(1)
    }

    const [link, setLink] = useState("") 

    function sign(){
        if(!user ) return
        tweetSign(address,user,setTweet);
        setFormStep(4);
    }



    return (
        <React.Fragment>

            {
                showTwitterModal ?

                    <div className="twitterModalWrapper">
                        <div className="twitterModalWindow">


                            {
                                formStep === 1 ?
                                
                                    <div className="twitterFormStep">

                                        <div className="twitterFormStepTittle">

                                        Become part of Sublime                
                                                                            
                                        </div>

                                        <div className="twitterFormStepTittle2">

                                        Connect your Twitter account in order to get verified.               
                                                                            
                                        </div>

                                        <div className="twitterFormStepTittle3 button">

                                        Learn more            
                                                                            
                                        </div>

                                        <div className="twitterFormStepButton1 button" onClick={() => oauth()}>
                                            <div className="twitterFormStepButtonIcon">
                                            
                                            </div>
                                            Connect with Twitter
                                        </div>


                                        <div className="twitterFormStepButton2 button" onClick={() => closeTwitterModal()}>
                                            Continue unverified
                                        </div>

                                    
                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 2 ?
                                
                                    <div className="twitterFormStep">
                                        <div className="formStepIndicator">1/4</div>
                                        <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                        Enter your twitter username to get started         
                                                                            
                                        </div>
                                        <input placeholder="Enter your twitter handle" type="text" className="formStepInput1" />
                                        <div className="twitterFormStepButton3 button" onClick={() => setFormStep(3)}>
                                            Next
                                        </div>
                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 3 ?
                                
                                <div className="twitterFormStep">
                                <div className="formStepIndicator">2/4</div>
                                <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                Sign a message     
                                                                    
                                </div>

                                <div className="twitterFormStepTittle2 twitterFormStepTittle2Left">

                                    Sign a message that would be used to link your wallet address and Twitter handle          
                                                                        
                                </div>


                                <div className="twitterFormStepBadge">
                                    <div className="twitterFormStepBadgeIcon1">
                                    
                                    </div>
                                    <div className="twitterFormStepBadgeIcon2">
                                    
                                    </div>
                                    <div className="twitterFormStepBadgeIcon3">
                                    
                                    </div>

                                    <div className="twitterFormStepBadgeText">
                                    {user}
                                    </div>
                                </div>

                                <div className="twitterFormStepButton3 button" onClick={() => sign()}>
                                    Next
                                </div>
                            </div>

                                :

                                null
                            }

                            {
                                formStep === 4 ?
                                
                                    <div className="twitterFormStep">
                                    

                                    <div className="formStepIndicator">3/4</div>
                                    <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                                        Tweet this message to verify your account   
                                                                        
                                    </div>

                                    <div className="twitterFormStepBadge2">

                                    {tweet}

                                    </div>

                                    
                                    <div className="twitterFormStepButton1 button" onClick={() => setFormStep(5)}>
                            
                                    Tweet this message
                                    </div>


                                    </div>

                                :

                                null
                            }

                            {
                                formStep === 5 ?
                                
                                    <div className="twitterFormStep">


<div className="formStepIndicator">4/4</div>
                                <div className="twitterFormStepTittle twitterFormStepTittleLeft">

                               Submit

                                </div>
                                
                                <input placeholder="Enter the tweet Id" type="text" className="formStepInput1" onChange={e => setTweetId(e.target.value)} value={tweetId}/>
                                <div className="twitterFormStepTittle2 twitterFormStepTittle2Left">
                                Submit to get verified  
                                                                        
                                </div>


                                {/* <div className="twitterFormStepTweet">
                   
                                    Tweet
                                                                        
                                </div> */}


                                <div className="twitterFormStepButton1 button" onClick={() => verify()}>
                            
                                Submit
                                </div>



                                    
                                    </div>

                                :

                                null
                            }



                        </div>
                    </div>

                :

                null
            }
            
        </React.Fragment>
    )
}
