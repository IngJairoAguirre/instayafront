import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider 
     domain="dev-8m1yu0awgmpkhcbt.us.auth0.com"    
     clientId="hb45mQ3YEqAL1MmCFV3fhCDCDbPGUvxv" 
     redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
