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
  @media screen and (max-width: 768px) {
    .loader-container {
      height: 70%;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
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
  height: 600px;
  overflow-x: auto;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
    padding-top: 1rem;
  }
`;
