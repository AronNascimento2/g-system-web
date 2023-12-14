import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const DetailsContent = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  height: auto;
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
      color:#2980b9;
    }
    .info {
      display: flex;
      align-items: center;
      margin: 0;
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
    padding: 0.5rem 1rem;
    color: #fff;
    .name {
      font-size: 20px;
    }
    .code {
      background-color: #3498db;
      color: #fff;
      padding: 0.3rem;
    }
  }
`;
