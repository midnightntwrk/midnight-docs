import React from 'react';
import Layout from '@theme-original/Layout';
import { Auth0Provider } from '@auth0/auth0-react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

function MetaTitleUpdater({ children }) {
  const location = useLocation();
  const path = location.pathname;

  let titleSuffix = 'Midnight Docs';
  if (path.startsWith('/blog') || path.includes('dev-diaries')) {
    titleSuffix = 'Midnight Dev Diaries';
  } else if (path.includes('/academy')) {
    titleSuffix = 'Midnight Academy';
  }

  const defaultTitle = document?.title?.split('|')[0]?.trim();
  const finalTitle = defaultTitle ? `${defaultTitle} | ${titleSuffix}` : titleSuffix;

  return (
    <>
      <Head>
        <title>{finalTitle}</title>
        <meta property="og:title" content={finalTitle} />
        <meta name="twitter:title" content={finalTitle} />
      </Head>
      {children}
    </>
  );
}

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
          <MetaTitleUpdater>
            <Layout {...props} />
          </MetaTitleUpdater>
        </Auth0Provider>
      )}
    </BrowserOnly>
  );
}