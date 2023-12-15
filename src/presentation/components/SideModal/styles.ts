import styled from "styled-components";

interface ModalProps {
  show: boolean;
}
export const ModalWrapper = styled.div<ModalProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
 

`;
export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  display: ${({ show }) => (show ? "block" : "none")};
  right: ${({ show }) => (show ? "0" : "-350px")};
  width: 500px;
  height: 100%;
  background-color: #fff;
  overflow-x: hidden;
  transition: right 0.3s;
  padding-top: 60px;
  border-radius: 50px 0 0 50px;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Sombra suave */
  padding: 20px;


 

  z-index: 999;
  @media (max-width: 767px) {
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  height: 100%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;
