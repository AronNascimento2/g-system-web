import styled from "styled-components";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";

export const Container = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-bottom: 1rem;
`;
export const StyledModalMobileDownSide = styled(ModalMobileDownSide)`
  height: auto;
  padding: 2rem;
  overflow: auto;
  ul {
    list-style: none;
    padding: 0;
  }
  .obs {
    width: 100%;
    border: 1px solid lightgray;
    height: 70px;
    margin-top: 1rem;
    padding: 1rem;
    overflow: auto;
  }
  .buttons-mobile {
    height: 100%;
    .wrapperbuttons-mobile {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
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
      font-size: 18px;
      font-weight: 600;
      color: #2980b9;
    }
    .info {
      display: flex;
      align-items: center;
      margin: 0;
    }
    .info-address {
      margin: 0;

      white-space: nowrap;
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info-address:hover {
      /* Quando o mouse passa por cima, o texto completo é exibido */
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
    background-color: #2980b9;
    border-radius: 20px 20px 0 0;
    padding: 0 1rem;
    color: #fff;
    .name {
      font-size: 20px;
    }
    .code {
      background-color: rgba(52, 152, 219, 0.4);
      color: #fff;
      padding: 0.3rem;
    }
  }
`;
