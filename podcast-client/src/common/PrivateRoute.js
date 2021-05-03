import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthenticate} from '../actions/loginActions';
import {auth} from '../firebase/firebaseConfig';


const PrivateRoute = ({ component: Component, ...rest }) => {
const dispatch = useDispatch()
  const authe = useSelector(state => state.auth)
  console.log('authenticate',authe.isAuthenticated)

return(
  <Route
    {...rest}
    render={(props) => {
        if(auth.authenticate){
          return <Component {...props} />;
        }
        else{
        return <Redirect to="/" />
        }
        }
      
    }
  />
  
)};


export default PrivateRoute;
