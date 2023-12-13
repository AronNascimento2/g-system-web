import styled from "styled-components";

export const StyledTable = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
  font-size: small;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    overflow: hidden; /* Adicione overflow para a tabela */

    th,
    td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      white-space: nowrap; /* Impede que o texto quebre */
      overflow: hidden; /* Esconde o conteúdo que excede */
      text-overflow: ellipsis; /* Mostra reticências (...) para indicar overflow */
    }
td{
    max-width: 150px;
}
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    @media (max-width: 768px) {
      th,
      td {
        padding: 8px 10px;
      }
    }

    /* Efeito de hover para mostrar o conteúdo completo ao passar o mouse */
    
  }
`;
