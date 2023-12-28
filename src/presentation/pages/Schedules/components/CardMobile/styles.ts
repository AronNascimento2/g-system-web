import styled from "styled-components";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";
import { HeaderText } from "../ContentModalTable/styles";

export const WrapperCard = styled.div`
  .loader-container {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      color: #2980b9;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const StyledModalMobileDownSide = styled(ModalMobileDownSide)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    height: 450px;
    overflow: auto;
  }
  .content {
    .list-container {
    }
  }
  .obs {
    width: 100%;
    border: 1px solid lightgray;
    height: 70px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    overflow: auto;
  }
  .buttons-mobile {
  display: flex;
  justify-content: center;
  width: 100%;
}

.wrapperbuttons-mobile {
  width: 100%; /* Ajuste a largura conforme necessário */
  max-width: 400px; /* Largura máxima para o contêiner */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

/* Estilo dos botões (ajustados para dois em cada linha) */
.wrapperbuttons-mobile button {
  width: calc(50% - 10px); /* Ajustar a largura do botão para ocupar metade do espaço, considerando o espaçamento */
}

  @media (max-width: 1080px) {
    .content {
    }
  }
`;
export const DetailsContent = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 0.5rem;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    div {
      display: flex;
      flex-direction: column;
    }
    .title {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #2980b9;
    }
    .info {
      display: flex;
      align-items: center;
      margin: 0;
      font-size: 14px;
    }
    .info-address {
      margin: 0;
      font-size: 14px;

      white-space: nowrap;
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info-address:hover {
      overflow: visible;
      white-space: normal;
      word-wrap: break-word; /* Permite que o texto quebre em várias linhas se necessário */
      max-width: none; /* Remove a limitação máxima de largura para exibir todo o texto */
    }
  }
`;
export const WrapperContent = styled.div`
  .name-client {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #3498db;
    border-radius: 20px 20px 0 0;
    padding: 0 1rem;
    color: #fff;
    .name {
      font-size: 16px;
      font-weight: 600;
    }
    .code {
      background-color: rgba(52, 152, 219, 0.4);
      color: #fff;
      padding: 0.3rem;
      font-size: 14px;
    }
  }
`;
export const StyledHeaderText = styled(HeaderText)``;
