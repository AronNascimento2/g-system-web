import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
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
`;
