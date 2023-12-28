import styled from "styled-components";
interface ModalContainerProps {
  show: boolean;
}

export const ModalWrapper = styled.div<ModalContainerProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: #fff;
  z-index: 999;
  height: auto;
  `;

export const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  left: 50%;
  height: 750px;
  width: 100%;
  border-radius: 40px 40px 0 0;
  transform: translateX(-50%);
  background-color: #fff; /* Cor de fundo do conteúdo do modal */
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); /* Exemplo de sombra */


  .closeButton {
    position: absolute;
    top: 7px;
    right: 25px;
    padding: 0.5rem;
    font-size: 34px;
    cursor: pointer;
  }
`;
