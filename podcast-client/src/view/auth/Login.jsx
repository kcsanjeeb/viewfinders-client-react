import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import firebase from 'firebase';
import {getRequest, postRequest} from '../../services/axios.config';
import {auth} from '../../services/firebase/config';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Login = () => {
  const history = useHistory()
  const authenticate = useSelector(state => state.auth)

  var uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [ firebase.auth.PhoneAuthProvider.PROVIDER_ID ]
  };

  useEffect(() => {

    if(authenticate.isAuthenticated){
      history.push('/')
      }

      async function fetchApi() {
        try{
            let response = await postRequest('');
        }catch(err){
            console.log(err)
        }
    }

    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } 
    else {
      const ui = new firebaseui.auth.AuthUI(auth)
      ui.start('#firebaseui-auth-container', uiConfig)
    }
    fetchApi()
  }, [])


  return (
   <>
      <div id="firebaseui-auth-container"></div>
      </>
    
  );
};

export default Login;