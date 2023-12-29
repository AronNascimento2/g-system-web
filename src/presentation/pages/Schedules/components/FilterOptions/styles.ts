import styled from "styled-components";

interface ModalContainerProps {
  isOpen: boolean;
}

export const Container = styled.div`
.filter-modal {
    width: 500px;
    @media (max-width: 1080px) {
      width: 98%;
    }
  }


`;
export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  z-index: 999;
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
  height: 350px;
  width: 100%;
  border-radius: 40px 40px 0 0;
  transform: translateX(-50%);
  background-color: white; /* Cor de fundo do conteúdo do modal */
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); /* Exemplo de sombra */

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto auto;
    width: 100%;
    gap: 0.5rem;
  }
  .closeButton {
    position: absolute;
    top: 5px;
    left: 10px;
    padding: 0.5rem;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  /* Adicione estilos conforme necessário */
`;
