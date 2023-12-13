/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// ... (importações e estilos)

import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  InputGroup,
  InputWrapper,
  LoginContainer,
  TogglePasswordVisibility,
} from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../utils/useAuth";
import InputMask from "react-input-mask";

export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cnpj, setCnpj] = useState<string>(() => {
    // Carregar CNPJ do localStorage, se existir
    const storedCnpj = localStorage.getItem("cnpj");
    return storedCnpj || "";
  });
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  //função para visualizar a senha no input
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //useEffect para redirecionar a pagina caso esteja autenticado e o usuário feche a janela
  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("expiration");

    if (token && expiration) {
      const expirationDate = new Date(expiration).getTime();

      const currentDate = new Date().getTime();

      if (expirationDate > currentDate) {
        navigate("/home");
      }
    }
  }, []); // Executa apenas uma vez no carregamento do componente
  const cnpjInputRef = useRef<HTMLInputElement>(null); // Ref para o input de CNPJ

  //função para fazer o Login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(username, password, cnpj);

      // Salvar CNPJ no localStorage após o login bem-sucedido
      localStorage.setItem("cnpj", cnpj);

      navigate("/home");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <form onSubmit={handleLogin}>
        <InputGroup>
          <InputMask
            mask="99.999.999/9999-99"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="CNPJ"
            autoComplete="tax-id"
            required
            className="inputmask"
            type="text"
            ref={cnpjInputRef} // Aplicar a ref ao elemento de CNPJ
          />
        </InputGroup>
        <InputGroup>
          <Input
            placeholder="Usuário"
            type="text"
            autoComplete="name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputWrapper>
            <Input
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password" // Adicionar o atributo autocomplete
            />
            <TogglePasswordVisibility onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePasswordVisibility>
          </InputWrapper>
        </InputGroup>
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <Button title={"Entrar"} loading={loading} />
      </form>
    </LoginContainer>
  );
};
