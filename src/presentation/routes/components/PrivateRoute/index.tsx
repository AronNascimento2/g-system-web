import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo: string; 
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const tokenExpiration = localStorage.getItem('expiration');

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && tokenExpiration) {
      const expirationDate = new Date(tokenExpiration).getTime();
      const currentDate = new Date().getTime();

      if (currentDate > expirationDate) {
        navigate(redirectTo); 
      }
    }
  }, [isAuthenticated, tokenExpiration, navigate, redirectTo]);

  if (!isAuthenticated || !tokenExpiration) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};
