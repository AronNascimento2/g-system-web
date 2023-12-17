import styled from "styled-components";

interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  secondaryColor?: string;
}

const sizes = {
  small: "120px",
  medium: "150px",
  large: "200px",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  position: relative;
  width: ${({ size }) => sizes[size ?? "medium"]};
  font-size: 16px;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? "not-allowed" : "pointer"};
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3498db")};
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.3s ease;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 40px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#2980b9")};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: black;
  }

  @media screen and (max-width: 1080px) {
    /* Estilos para telas menores que 768px de largura */
    width: 120px;
    height: 25px;
    font-size: 11px;
    padding: 0.1rem;
    /* Adicione mais estilos conforme necessário para ajustar a responsividade */
  }
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const IconContainer = styled.span<{ position: "left" | "right" }>`
  order: ${({ position }) => (position === "left" ? "-1" : "1")};
  margin: 0 8px; /* Ajuste conforme necessário */
`;
