import styled from "styled-components";

export const Container = styled.div`
  .select-date-modal {
    width: 400px;
    @media (max-width: 1080px) {
      height: 550px;
      width: 98%;
    }
  }
  .react-datepicker {
    /* Outros estilos para telas menores, se necessário */
  }
  input {
    width: 150px;
    padding: 10px;
    align-items: center;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    outline: none;
    border: 1px solid lightgray;
  }
`;
