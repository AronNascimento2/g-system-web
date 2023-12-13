import React from "react";
import { AppRouter } from "./presentation/routes/AppRouter";
import { AuthProvider } from "./presentation/contexts/AuthProvider";
import "./App.css";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
