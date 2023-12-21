import { useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

export interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo: string; 
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const tokenExpiration = localStorage.getItem('expiration');
  const userPermissions = JSON.parse(localStorage.getItem('permissions') ?? '[]'); // Obtém as permissões do usuário

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname.split('/')[1]; // Obtém a parte inicial da rota atual

    // Comparação entre a rota atual do navegador (sem barra inicial) e cada elemento do array de permissões
    const hasPermission = userPermissions.includes(currentRoute);

    if (!hasPermission) {
      navigate('/'); // Redireciona para '/Sumario' se não houver permissão para a rota atual
    }

    if (isAuthenticated && tokenExpiration) {
      const expirationDate = new Date(tokenExpiration).getTime();
      const currentDate = new Date().getTime();

      if (currentDate > expirationDate) {
        navigate(redirectTo);
      }
    }
  }, [isAuthenticated, tokenExpiration, navigate, redirectTo, userPermissions, location.pathname]);

  if (!isAuthenticated || !tokenExpiration) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};
