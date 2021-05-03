import React, {useEffect} from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/';
import PrivateRoute from "..//common/PrivateRoute";
import './App.scss';
import { auth } from '../firebase/firebaseConfig';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import {setAuthenticate} from '../store/reducer/authenticate';

const App = () => {
    const {language} = useSelector(state => state.musicReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
          if (user) {
            dispatch(setAuthenticate(true))
          }
          else {
            dispatch(setAuthenticate(false))
          }
        })
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
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                         <PrivateRoute path="/home" component={Home} />
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
        </PersistGate>
    </Provider>
    );
}

export default App; 