import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
