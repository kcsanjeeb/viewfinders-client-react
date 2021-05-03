import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import PrivateRoute from "./common/PrivateRoute";
import Login from './view/auth/SocialMediaLogin';
import Home from './view/home/Home';

function App() {

 

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            {/* <PrivateRoute path="/home" component={Home} /> */}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
