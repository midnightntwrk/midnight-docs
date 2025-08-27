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
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthGuard({ children }) {
  const { isAuthenticated, loginWithRedirect, isLoading, error, user } = useAuth0();

  // 🔍 Log everything
  console.log("Auth0 State:", {
    isLoading,
    isAuthenticated,
    error,
    user,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '4rem' }}>
        <h2>❌ Auth Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>🔒 Access Restricted</h2>
        <p>You must log in with GitHub to access this section.</p>
        <button
  onClick={() => loginWithRedirect()}
  style={{
    fontSize: '1rem',
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#24292e', // GitHub dark gray
    color: '#ffffff',
    cursor: 'pointer',
  }}
>
  Login with GitHub
</button>
      </div>
    );
  }

  return <>{children}</>;
}
