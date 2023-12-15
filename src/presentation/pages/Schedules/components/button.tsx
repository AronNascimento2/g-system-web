import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  width: 48%;
  background-color: #3498db;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  gap: 0.5rem;
`;

export const DynamicButton = ({ icon, text, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </ButtonContainer>
  );
};
