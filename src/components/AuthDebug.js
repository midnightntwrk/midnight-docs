// src/components/AuthDebug.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthDebug() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  return (
    <pre style={{ background: '#eee', padding: '1rem' }}>
      {JSON.stringify({ isLoading, isAuthenticated, user }, null, 2)}
    </pre>
  );
}
