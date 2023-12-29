import React from "react";
import { TablePendencies } from "./components/TablePendencies";
import { Container } from "./styles";

export const PendenciesPage: React.FC = () => {
  return (
    <Container>
      <TablePendencies />
    </Container>
  );
};
