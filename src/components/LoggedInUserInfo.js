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
