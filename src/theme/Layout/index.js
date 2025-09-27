// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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