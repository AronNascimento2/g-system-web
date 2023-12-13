import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { PrivatePage } from "./components";
import { ROUTES_PATHS } from "../constants/routePaths";


export const AppRouter = () => {
  const routeComponents = ROUTES_PATHS.map((route, index) => {
    const { path, element: Component, isPrivate } = route;
    return (
      <Route
        key={index}
        path={path}
        element={
          isPrivate ? (
            <PrivatePage>
              <PrivateRoute redirectTo="/">
                <Component />
              </PrivateRoute>
            </PrivatePage>
          ) : (
            <Component />
          )
        }
      />
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        {routeComponents}
        {/* Redirecionamento para uma rota padrão caso nenhuma rota corresponda */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
