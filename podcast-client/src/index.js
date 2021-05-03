import React from "react";
import ReactDom from 'react-dom';
import App from './app/App.jsx'
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './reducers'


ReactDom.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </PersistGate>
  </Provider>,
    document.getElementById('root')
);
