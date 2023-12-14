/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { AuthData, authenticate } from "../../../services/Authentication";

export interface AuthContextData {
  user: AuthData | null;
  permissions: string[] | null;
  logo: string | null; // Adicionando a logo ao contexto de autenticação
  login: (username: string, password: string, cnpj: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

// ...importações e definições de tipos

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthData | null>(null);
  const [permissions, setPermissions] = useState<string[] | null>(null);
  const [logo, setLogo] = useState<string | null>('');

  useEffect(() => {
    const storedToken = localStorage.getItem("token") ?? ''; // Definir um valor padrão caso seja nulo ou undefined
    const storedExpiration = localStorage.getItem("expiration") ?? '';
    const storedPermissions = localStorage.getItem("permissions") ?? '';
    const storedLogo = localStorage.getItem("logo") ?? '';
  
    if (
      storedToken &&
      storedExpiration &&
      storedPermissions &&
      storedLogo !== ''
 
    ) {
      const expiration = new Date(storedExpiration).getTime();
      const currentDate = new Date().getTime();

      if (expiration > currentDate) {
        setUser({
          JWT: { Token: storedToken },
          Permissions: JSON.parse(storedPermissions),
        });
        setPermissions(JSON.parse(storedPermissions));
        setLogo(storedLogo); // Define a logo no estado do contexto
      }
    }
  }, []);
  

  const login = useCallback(async (username: string, password: string, cnpj: string) => {
    try {
      const response = await authenticate(username, password, cnpj);
      if (response.success && response.data) {
        const { JWT, Permissions, Logo } = response.data;
        setUser({ JWT, Permissions });
        setPermissions(Permissions);
        setLogo(Logo); // Atualizar a logo no estado do contexto
        localStorage.setItem("permissions", JSON.stringify(Permissions));
        localStorage.setItem("logo", Logo); // Salvar a logo no localStorage
      } else {
        throw new Error(response.message ?? "Erro ao autenticar");
      }
    } catch (error:any) {
      throw new Error("Erro ao autenticar: " + error.message);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setPermissions(null);
    setLogo(null); // Limpa a logo ao fazer logout
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("permissions");
    localStorage.removeItem("logo"); // Remove a logo do localStorage
  }, []);

  const authContextValue = useMemo(() => {
    return { user, permissions, logo, login, logout };
  }, [user, permissions, logo, login, logout]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};