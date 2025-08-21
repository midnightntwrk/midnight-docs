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
