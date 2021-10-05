import React from 'react';
import ReactDOM from 'react-dom';
import Payments from './Payments';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev--cbzlj1a.us.auth0.com" clientId="GkT9XHxWtxkj94Shc9oj1daYPYsPk161" redirectUri={window.location.origin}>
      <Payments />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

