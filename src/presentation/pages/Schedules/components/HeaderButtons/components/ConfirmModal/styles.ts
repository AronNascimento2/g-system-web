import styled from "styled-components";

export const Container = styled.div`
  font-size: 14px;
  background-color: red;
  .client-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .client-data {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .client-details {
    gap: 10px;
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
  }
  textarea {
    height: 25px;

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
