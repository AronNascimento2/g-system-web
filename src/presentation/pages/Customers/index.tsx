import React from "react";
import { Container } from "./styles";
import { TableCustomers } from "./components/TableCustomers";

export const CustomersPage: React.FC = () => {
  return (
    <Container>
      <TableCustomers />
    </Container>
  );
};
