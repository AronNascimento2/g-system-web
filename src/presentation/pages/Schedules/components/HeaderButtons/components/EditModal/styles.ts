import styled from "styled-components";

export const Container = styled.div`
  .client-container {
    padding-bottom: 30px;
  }
  .client-data {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    margin-bottom: -20px; /* Ajuste a seu gosto */
    padding-bottom: 0; /* Ajuste a seu gosto */

    select {
        width: 100px;
      height: 25px;
    }
    .obs {
      padding: 10px;
      height: 50px;
      background-color: lightgray;
    }
    @media (max-width: 1080px) {
        font-size: 14px;
        .adress{
    width: 280px;
}
    }
  }
  .edit-modal {
    width: 750px;
    @media (max-width: 1080px) {
      width: 98%;
    }
  }
  .container-map {
    height: 500px;
    padding-bottom: 10px;
    @media (max-width: 1080px) {
      height: 300px;
    }
  }
`;
