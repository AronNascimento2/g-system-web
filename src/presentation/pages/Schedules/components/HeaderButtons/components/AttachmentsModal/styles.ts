import styled from "styled-components";

export const Container = styled.div`
  .client-container {
    padding-bottom: 30px;
  }
  .container-fullScreen-image {

    .fullScreen-image{
      max-width: 100%;
    max-height: 90vh;
    cursor: pointer;
    
    }
    .button-close-fullimages{
      position: absolute;
      top: 10%;
      right: 5%;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      cursor: pointer;
      border: none;
      background: lightgray;
      border-radius: 20px;
      font-size: 1.2em;
    }
    @media (max-width: 1080px) {

      .fullScreen-image {
      }
      .button-close-fullimages{
      top: 12%;
      right: 8%;


   
    }
    
    }
  }
  .container-images {
    height: 300px;
    overflow: auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1080px) {
      justify-content: center;
    }
  }
  .images {
    position: relative;
    max-width: 200px;
    max-height: 300px;
    margin-right: 5px;
    margin-bottom: 5px;
    .button-remove-images {
      position: absolute;
      top: 2%;
      right: 2%;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      cursor: pointer;
      border: none;
      background: lightgray;
      border-radius: 20px;
      font-size: 1.2em;
    }
    @media (max-width: 1080px) {
      max-width: 180px;
      max-height: 300px;
    }
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
      .adress {
        width: 280px;
      }
    }
  }
  .edit-modal {
    width: 750px;
    @media (max-width: 1080px) {
      width: 98%;
      height: 550px;
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
