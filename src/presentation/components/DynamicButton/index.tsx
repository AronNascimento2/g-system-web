import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
  width?: string
}
const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  background-color: #3498db;
  width: ${({ width }) =>
    width ? width : ""}; /* Definindo a largura dinâmica */
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  gap: 0.5rem;
  height: 40px;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? "not-allowed" : "pointer"};
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3498db")};
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    color: black;
  }
`;

interface DynamicButtonProps {
  icon?: IconDefinition;
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  width?: string
}

export const DynamicButton = ({
  icon,
  text,
  onClick,
  className,
  disabled,
  width,
}: DynamicButtonProps) => {
  return (
    <ButtonContainer
      width={width} // Passando a propriedade width para o ButtonContainer
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon as IconProp} />} <p>{text}</p>
    </ButtonContainer>
  );
};
