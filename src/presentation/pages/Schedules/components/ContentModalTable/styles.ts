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
    margin-bottom: 0.5rem;
  }
  .buttons {
    height: 100%;
    .wrapperbuttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    .wrapperbuttons {

    }
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
