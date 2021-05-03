import React, {useEffect} from "react";
import PrivateRoute from "../common/PrivateRoute";
import './App.scss';
import { auth } from '../firebase/firebaseConfig';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import {setAuthenticate} from '../actions/loginActions';
import MyPlaylist from '../components/fragment/Playlist';

const App = () => {
    const {language} = useSelector(state => state.musicReducer);
    const dispatch = useDispatch();

    // const authenticate = useSelector(state => state.auth)
    // console.log('authenticate',authenticate.isAuthenticated)


      useEffect(() => {
          try{
            auth.onAuthStateChanged(async user => {
                if (user) {
                    console.log('yser', user)
                  dispatch(setAuthenticate(true))
                }
                else {
                    console.log('yser', user)
                  dispatch(setAuthenticate(false))
                }
              })
          }catch(err){
              console.log(err.message)
          }
       
      }, [])

    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')){
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/home" exact component={Home}/>
                         <PrivateRoute path="/myPlaylist" component={MyPlaylist} />
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    //     </PersistGate>
    // </Provider>
    );
}

export default App; 