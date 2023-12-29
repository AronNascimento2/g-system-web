import React from "react";
import { TableSales } from "./components/TableSales";
import { Container } from "./styles";

export const SalesPage: React.FC = () => {
  return (
    <Container>
      <TableSales />
    </Container>
  );
};
