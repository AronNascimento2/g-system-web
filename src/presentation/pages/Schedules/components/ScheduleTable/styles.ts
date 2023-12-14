import styled from "styled-components";

export const ScheduleTableContainer = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
  table {
    border-collapse: collapse;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }

  thead {
    border-bottom: 1px solid lightgrey;
  }

  th {
    background-color: #2980b9;
    color: #fff;
    justify-content: space-between;
    :hover {
      cursor: default;
    }
  }

  th,
  td {
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
  }

  tr {
    &:hover {
      background: #3498db;
      color: #fff;
    }
  }
`;
