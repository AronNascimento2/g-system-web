import styled from "styled-components";

export const Container = styled.div`
  .buttons {
    width: 100%;
    display: flex;

    justify-content: center;
  }
  .buttons-wrapper {
    display: flex;
    width: 100%;

    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .modal{
    height: 300px;
  }
  .open-options-button {
    width: 30px;
    border-radius: 50%;
    height: 30px;
    outline: 0;
    border: none;
    background-color: #3498db;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */

    color: #fff;
  }
`;


