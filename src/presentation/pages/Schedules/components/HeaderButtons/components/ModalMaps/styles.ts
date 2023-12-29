import styled from "styled-components";

export const Container = styled.div`
.map-services-modal{
    width: 750px;
    @media (max-width: 1080px) {
      width: 98%;
      padding: 5px;

    }
}
  .client-names {
    border: 1px solid lightgray;
    font-size: 14px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1080px) {
      height: 100px;
    }
    li {
      &:hover {
        cursor: pointer;
      }
    }
    li.selected {
      width: 450px;
      background-color: lightgray;

      @media (max-width: 1080px) {
        width: 200px;
      }
    }
    .buttons-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .button-sort {
        border-radius: 50%;
        outline: 0;
        border: 0;
        height: 30px;
        width: 30px;
        color: #fff;
        margin: 10px;
        background-color: #3498db;
        &:hover {
          cursor: pointer;
        }
      }
      .button-sort[disabled] {
        background-color: #ccc;
        cursor: not-allowed; /* Exemplo: mudar o cursor */
      }
    }
  }
  .container-map {
    height: 500px;
    @media (max-width: 1080px) {
      height: 410px;
    }
  }
`;
