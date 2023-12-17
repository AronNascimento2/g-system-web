import styled from "styled-components";

export const Container = styled.div`
.loader-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      color: #2980b9;
    }
  }
  
  .overflow-items {
    overflow: auto;
  }
  @media screen and (max-width: 768px) {
    .overflow-items {
      height: 100%;
      padding: 0.5rem;
    }
    .loader-container {
      height: 80vh;
    }
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 0.4rem;
  padding: 1rem;
  flex-wrap: wrap;

  .input-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  select {
    width: 200px;
    height: 40px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
    padding: 0.5rem;
    padding-top: 1rem;
    select {
      width: 120px;
      height: 25px;
      font-size: 12px;
    }
  }
`;

export const WrapperTable = styled.div`
  max-width: 100%;
  padding: 1rem;
  height: 100%;
  overflow-x: auto;
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
    @media screen and (max-width: 768px) {
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
