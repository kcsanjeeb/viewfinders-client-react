import React, {useState, useEffect} from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";
import firebase from 'firebase';
import {auth} from '../../firebase/firebaseConfig';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

function Login (){

    var uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [ 
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID  
        ]
      };

      useEffect(() => {

        if (firebaseui.auth.AuthUI.getInstance()) {
          const ui = firebaseui.auth.AuthUI.getInstance()
          ui.start('#firebaseui-auth-container', uiConfig)
        
        } 
        else {
          const ui = new firebaseui.auth.AuthUI(auth)
          ui.start('#firebaseui-auth-container', uiConfig)
         
        }
      }, [])

        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Vusic</a>
                        <div id="firebaseui-auth-container" />
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/home"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }

export default Login;