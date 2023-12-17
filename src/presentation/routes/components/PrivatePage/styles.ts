import styled from "styled-components";

export const PageContainer = styled.main`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const PageRightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: auto;
  overflow-x: hidden;
`;
