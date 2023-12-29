import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  isMobile?: boolean; // Propriedade para identificar o modo mobile
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  background-color: #3498db;
  width: ${({ width }) => (width ? width : "")};
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  gap: 0.5rem;

  height: 35px;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? "not-allowed" : "pointer"};
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3498db")};
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: black;
  }
  @media (max-width: 1080px) {
    p {
      display: ${({ isMobile }) => (isMobile ? "none" : "block")};
    }
    ${({ isMobile }) =>
      isMobile &&
      `
    width: 40px;
    border-radius: 50%;
    height: 40px;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #3498db;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
      p {
       display: none;
     }
    `}
  }
`;

interface DynamicButtonProps {
  icon?: IconDefinition;
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  width?: string;
  isMobile?: boolean; // Propriedade para identificar o modo mobile
}

export const DynamicButton = ({
  icon,
  text,
  onClick,
  className,
  disabled,
  width,
  isMobile = false, // Valor padrão para isMobile é falso
}: DynamicButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      disabled={disabled}
      className={className}
      onClick={onClick}
      isMobile={isMobile} // Passando a propriedade isMobile para o ButtonContainer
    >
      {icon && <FontAwesomeIcon icon={icon as IconProp} />}
      {text && <p>{text}</p>}
    </ButtonContainer>
  );
};
