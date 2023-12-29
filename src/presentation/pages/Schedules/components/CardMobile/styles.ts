import styled from "styled-components";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";
import { HeaderText } from "../ContentModalTable/styles";

export const WrapperCard = styled.div`
  overflow: auto;
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

  @media screen and (max-width: 1080px) {
    height: 100%;
    padding: 0.5rem;
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
    padding-top: 15px;
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
    width: calc(
      50% - 10px
    ); /* Ajustar a largura do botão para ocupar metade do espaço, considerando o espaçamento */
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
export const Wrapperbuttons = styled.div``;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
 z-index: 999;
  .menubutton {
   
    height: 40px;
    width: 100px;
    background-color: #fff;
    outline: none;
    border-color: lightgray;
    border-width: 0 1px 1px 1px; /* Especificando a largura das bordas */
    border-style: hidden solid solid solid;
    border-radius: 0 0 20px 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 0.4rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  flex-wrap: wrap;
  .datepicker {
    width: 198px;
    height: 40px;
    padding-right: 25px;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid lightgray;
  }
  @media (max-width: 1080px) {
    padding-bottom: 10px;
  }
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
  @media screen and (max-width: 1080px) {
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

export const Containers = styled.div``;
