import React, {  useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import firebase from 'firebase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import {getRequest, postRequest} from '../../services/axios.config';
import {auth} from '../../services/firebase/config';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import {
    makeStyles,
    Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
      justifyContent: 'space-around'
  },
  dialogBox: {
      width: '1000px'
  },
  socialGrid:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
  },
  verifiedIcons: {
      color: green[500],
      fontSize: 20
  }
}))

const SocialMediaLogin = () => {
  const classes = useStyles()
  const history = useHistory()
  const authenticate = useSelector(state => state.auth)
  const [apiData, setApiData] = useState([])

  var uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [ 
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID  
    ]
  };
 
  useEffect(() => {

    if(authenticate.isAuthenticated){
      history.push('/')
      }

    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    
    } 
    else {
      const ui = new firebaseui.auth.AuthUI(auth)
      ui.start('#firebaseui-auth-container', uiConfig)
     
    }
  }, [])

  return (
      <div id="firebaseui-auth-container">
     </div> 
    
  );
};

export default SocialMediaLogin;