import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const authDomain = "id.nib-cf-test.com";                //nib-kaos
const authClientId = "yYHy96TTCEBMc4lYRAJVFh4K7Ibqbwrx" //Hand-off-prototype client
const authAudience = "https://my.nib.com.au/api"        //Should be the same for all nib tenants

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


