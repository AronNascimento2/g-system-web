import styled from "styled-components";

export const Container = styled.div`
.confirm-modal{
  width: 750px;
  height: 820px;
  @media (max-width: 1080px) {
    width: 98%;
    top:43%;
  }
}
  .client-container {
    display: flex;
    gap: 10px;
    padding-top: 1rem;
    align-items: center;
    font-size: 14px;
    .datepicker {
      width: 150px;
      align-items: center;
      text-align: center; /* Centraliza o texto dentro do input */
    }
    @media (max-width: 1080px) {
      padding-bottom: 10px;
    }
  }
  .client-data {
    display: flex;
    align-items: center;
    gap: 5px;

    padding-top: 10px;
  }
  .client-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid lightgray;
    padding: 0.5rem;
  }
  .wrapper {
    gap: 10px;
    display: flex;
  }
  select {
    height: 25px;
    width: 100%;
  }
  textarea {
    height: 25px;
    width: 100%;

    resize: none;
  }

  .form-client {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
  .local {
    display: flex;
    align-items: center;
  }
  .car-details {
    padding: 0.5rem;

    flex: 1;
    border: 1px solid lightgray;
  }
  .details {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    border: 1px solid lightgray;
    margin-bottom: 0.5rem;
  }
  .container {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1080px) {
    .client-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1px;
    }
  }
`;
