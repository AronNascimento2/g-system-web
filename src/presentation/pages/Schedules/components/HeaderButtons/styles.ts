import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;
  align-items: center;
  .datepicker {
    width: 220px;
    height: 40px;
    font-size: 14px;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    border: 1px solid lightgray;
  }
  @media (max-width: 1080px) {
    padding-bottom: 10px;
  }
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
  @media screen and (max-width: 1080px) {
    justify-content: center;
    padding: 0;
    padding: 0.5rem;
    padding-top: 1rem;
    select {
      width: 120px;
      height: 25px;
      font-size: 12px;
    }
  }

  .input-search {
    width: 250px;
    height: 40px;
    border-radius: 20px;
    outline: 0;
    border: 1px solid lightgray;
    padding-left: 1rem;
  }
`;
