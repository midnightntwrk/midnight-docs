import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      style={{
        fontSize: '1rem',
        padding: '0.5rem 1.5rem',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#24292e',
        color: '#ffffff',
        cursor: 'pointer',
      }}
    >
      Logout
    </button>
  );
}
