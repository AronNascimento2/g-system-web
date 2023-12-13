/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { AuthData, authenticate } from "../../../services/Authentication";

export interface AuthContextData {
  user: AuthData | null;
  permissions: string[] | null; // Adicione as permissões ao contexto de autenticação
  login: (username: string, password: string, cnpj: string) => Promise<void>;
  logout: () => void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthData | null>(null);
  const [permissions, setPermissions] = useState<string[] | null>(null); // Estado para as permissões

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedExpiration = localStorage.getItem("expiration");
    const storedPermissions = localStorage.getItem("permissions"); // Recupere as permissões salvas

    if (storedToken && storedExpiration && storedPermissions) {
      const expiration = new Date(storedExpiration).getTime();
      const currentDate = new Date().getTime();

      if (expiration > currentDate) {
        setUser({
          JWT: { Token: storedToken },
          Permissions: JSON.parse(storedPermissions),
        });
        setPermissions(JSON.parse(storedPermissions)); // Defina as permissões no estado do contexto
      }
    }
  }, []);

  const login = async (username: string, password: string, cnpj: string) => {
    try {
      const response = await authenticate(username, password, cnpj);
      if (response.success && response.data) {
        const { JWT, Permissions } = response.data;
        setUser({ JWT, Permissions });
        setPermissions(Permissions); // Atualize as permissões no estado do contexto
        localStorage.setItem("permissions", JSON.stringify(Permissions)); // Salve as permissões no localStorage
      } else {
        throw new Error(response.message || "Erro ao autenticar");
      }
    } catch (error:any) {
      throw new Error("Erro ao autenticar: " + error.message);
    }
  };

  const logout = () => {
    setUser(null);
    setPermissions(null); // Limpe as permissões ao fazer logout
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("permissions"); // Remova as permissões do localStorage ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ user, permissions, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
