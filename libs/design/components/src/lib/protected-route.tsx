import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { from } from 'rxjs';
import { useAuth } from './auth-provider';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  outlet: JSX.Element;
};

export function ProtectedRoute({
  isAuthenticated,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return (
      <Navigate
        to={{ pathname: '/login' }}
        state={{ from: window.location.pathname }}
      />
    );
  }
}

// export const ProtectedRoute = ({ children }: Props) => {
//   const { token } = useAuth();

//   if (!token) {
//     return (
//      <Navigate to="/login" />
//     );
//   }

//   return children;
// };
