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

export default function LoggedInUserInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log('Auth0:', { isLoading, isAuthenticated, user });

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>👋 Welcome, {user.nickname || 'User'}!</p>
      <img src={user.picture} alt="Avatar" style={{ width: 48, borderRadius: '50%' }} />
    </div>
  );
}
