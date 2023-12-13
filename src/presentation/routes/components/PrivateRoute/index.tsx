import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
