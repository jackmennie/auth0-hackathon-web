import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const authDomain = "jacks-hackathon.au.auth0.com";                
const authClientId = "7y2ODPzRMqWBBslxFPhprSKOyGStbtUr" 
const authAudience = "https://jacks-api.com.au/api"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      audience={authAudience}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


