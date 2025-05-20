import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderWrapper = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-600zbek4g7efcqgw.us.auth0.com"
      clientId="ScPFNYUlxRQgIoPun7hxGKmX4UF78LRt"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWrapper;
