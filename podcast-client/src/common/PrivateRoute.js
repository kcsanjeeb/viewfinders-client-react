import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthenticate} from '../actions/loginActions';
import {auth} from '../firebase/firebaseConfig';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const dispatch = useDispatch()
  const authe = useSelector(state => state.auth)
  console.log(authe)
  
  useEffect(() => {
    const isUserAuthenticated = () => {
      auth.onAuthStateChanged(async user => {
        if (user) {
          console.log(user)
          dispatch(setAuthenticate(true))
          return true
        }
        else {
          console.log(user)
          dispatch(setAuthenticate(false))
          return false
        }
      })  
    } 
    isUserAuthenticated()
  }, [])

   

return(
  <Route
    {...rest}
    render={(props) => {
        if(authe.isAuthenticated){
          return <Component {...props} />;
        }
        else{
        return <Redirect to="/login" />
        }
        }
      
    }
  />
  
)};


export default PrivateRoute;
