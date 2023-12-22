import React, { useEffect, useRef, useState } from "react";
import {
  Container,
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
import { WrapperButton } from "../../components/WrapperButton/styles";

export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cnpj, setCnpj] = useState<string>(() => {
    // Carregar CNPJ do localStorage, se existir
    const storedCnpj = localStorage.getItem("cnpj");
    return storedCnpj ?? "";
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  //função para visualizar a senha no input
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

useEffect(() => {
  const token = localStorage.getItem("token");
  const expiration = localStorage.getItem("expiration");

  if (token && expiration) {
    const expirationDate = new Date(expiration).getTime();
    const currentDate = new Date().getTime();

    if (expirationDate > currentDate) {
      navigate("/");
    }
  }
}, [navigate]);

  const cnpjInputRef = useRef<HTMLInputElement>(null); // Ref para o input de CNPJ

  //função para fazer o Login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(userName, password, cnpj);

      // Salvar CNPJ no localStorage após o login bem-sucedido
      localStorage.setItem("cnpj", cnpj);

      navigate("/Agenda");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro ao fazer login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LoginContainer>
      <div className="div-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
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
              value={userName}
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
            <div className="error-message-container">
              <p className="message">{error}</p>
            </div>
          )}
          <WrapperButton className="buttons">
            <Button className="button" title={"Entrar"} loading={loading} />
            <Button disabled className="button" title={"Esqueci a senha"} />
          </WrapperButton>
        </form>
      </LoginContainer>
     
    </Container>
  );
};
