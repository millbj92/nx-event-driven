import { Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
