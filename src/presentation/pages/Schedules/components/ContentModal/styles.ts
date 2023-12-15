import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  ul {
    padding: 0;
    list-style: none;
  }
  .content {
    height: 100%;
  }
  .obs {
    width: 100%;
    border: 1px solid lightgray;
    height: 100px;
    margin-top:1rem ;
    padding: 1rem;
    overflow: auto;
  }
  .buttons {
    height: 100%;
    .wrapperbuttons {
      padding-top: 2rem;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeaderText = styled.p`
  font-size: 30px;
  align-self: center;
  display: flex;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
