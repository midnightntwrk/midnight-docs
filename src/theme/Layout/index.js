import React from 'react';
import Layout from '@theme-original/Layout';
import { Auth0Provider } from '@auth0/auth0-react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function LayoutWrapper(props) {
  return (
    <BrowserOnly>
      {() => (
        <Auth0Provider
          domain="dev-600zbek4g7efcqgw.us.auth0.com"
          clientId="ScPFNYUlxRQgIoPun7hxGKmX4UF78LRt"
          authorizationParams={{
            redirect_uri: window.location.origin,
            connection: 'github',
          }}
        >
          <Layout {...props} />
        </Auth0Provider>
      )}
    </BrowserOnly>
  );
}
