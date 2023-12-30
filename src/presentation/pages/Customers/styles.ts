import styled from "styled-components";

export const Container = styled.div`
  .overflow-items {
    overflow: auto;
  }
  @media screen and (max-width: 1080px) {
    .overflow-items {
      height: 100%;
      padding: 0.5rem;
    }
    .loader-container {
      height: 80vh;
    }
  }
`;


export const WrapperTable = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding: 0;
    padding-top: 1rem;
    background-color: black;
  }
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Estilos para o conteúdo do modal */
  .modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 30%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
    @media screen and (max-width: 1080px) {
      max-width: 90%;
    }
  }

  /* Estilos para o botão de fechar o modal */
  .closeButton {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
  }
`;
