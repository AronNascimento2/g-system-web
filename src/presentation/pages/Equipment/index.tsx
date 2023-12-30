import React from "react";
import { Container } from "./styles";
import { TableEquipment } from "./components/TableEquipment";

export const EquipmentPage: React.FC = () => {
  return (
    <Container>
      <TableEquipment />
    </Container>
  );
};
