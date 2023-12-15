import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
  
}
const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  width: 48%;
  background-color: #3498db;

  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  gap: 0.5rem;
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
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
 
}

export const DynamicButton = ({
  icon,
  text,
  onClick,
  className,
  disabled
}: DynamicButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </ButtonContainer>
  );
};
