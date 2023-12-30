import { ScheduleTableContainer, WrapperTable } from "./styles";
import { HeaderButtonsEquipment } from "../HeaderButtonsEquipment";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    equipment: "Equipamento 1",
    status: "Ativo",
    model: "Modelo A",
    serialNumber: "SN001",
    client: "Cliente A",
    plate: "ABC1234",
    technician: "Técnico 1",
    supplier: "Fornecedor X",
    iccidStatus: "Ativo",
    m2mOperatorNumber: "1234567890",
    observation: "Observação sobre o equipamento 1",
  },
  {
    equipment: "Equipamento 2",
    status: "Inativo",
    model: "Modelo B",
    serialNumber: "SN002",
    client: "Cliente B",
    plate: "DEF5678",
    technician: "Técnico 2",
    supplier: "Fornecedor Y",
    iccidStatus: "Inativo",
    m2mOperatorNumber: "0987654321",
    observation: "Observação sobre o equipamento 2",
  },
  {
    equipment: "Equipamento 1",
    status: "Ativo",
    model: "Modelo A",
    serialNumber: "SN001",
    client: "Cliente A",
    plate: "ABC1234",
    technician: "Técnico 1",
    supplier: "Fornecedor X",
    iccidStatus: "Ativo",
    m2mOperatorNumber: "1234567890",
    observation: "Observação sobre o equipamento 1",
  },
  {
    equipment: "Equipamento 2",
    status: "Inativo",
    model: "Modelo B",
    serialNumber: "SN002",
    client: "Cliente B",
    plate: "DEF5678",
    technician: "Técnico 2",
    supplier: "Fornecedor Y",
    iccidStatus: "Inativo",
    m2mOperatorNumber: "0987654321",
    observation: "Observação sobre o equipamento 2",
  },
  {
    equipment: "Equipamento 1",
    status: "Ativo",
    model: "Modelo A",
    serialNumber: "SN001",
    client: "Cliente A",
    plate: "ABC1234",
    technician: "Técnico 1",
    supplier: "Fornecedor X",
    iccidStatus: "Ativo",
    m2mOperatorNumber: "1234567890",
    observation: "Observação sobre o equipamento 1",
  },
  {
    equipment: "Equipamento 2",
    status: "Inativo",
    model: "Modelo B",
    serialNumber: "SN002",
    client: "Cliente B",
    plate: "DEF5678",
    technician: "Técnico 2",
    supplier: "Fornecedor Y",
    iccidStatus: "Inativo",
    m2mOperatorNumber: "0987654321",
    observation: "Observação sobre o equipamento 2",
  },
  {
    equipment: "Equipamento 1",
    status: "Ativo",
    model: "Modelo A",
    serialNumber: "SN001",
    client: "Cliente A",
    plate: "ABC1234",
    technician: "Técnico 1",
    supplier: "Fornecedor X",
    iccidStatus: "Ativo",
    m2mOperatorNumber: "1234567890",
    observation: "Observação sobre o equipamento 1",
  },
];

const columns = [
  { Header: "Equipamento", accessor: "equipment" },
  { Header: "Status", accessor: "status" },
  { Header: "Modelo", accessor: "model" },
  { Header: "Nº de Série", accessor: "serialNumber" },
  { Header: "Cliente", accessor: "client" },
  { Header: "Placa", accessor: "plate" },
  { Header: "Técnico", accessor: "technician" },
  { Header: "Fornecedor (Chip)", accessor: "supplier" },
  { Header: "Status do Chip ICCID", accessor: "iccidStatus" },
  { Header: "Nº do Chip Operadora M2M", accessor: "m2mOperatorNumber" },
  { Header: "Observação", accessor: "observation" },
];

export const TableEquipment = () => {
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsEquipment />
        <div className="container-tabs">
          <div className="register-tab"></div>
        </div>
        <DynamicTable columns={columns} data={data} />
        <div className="obs-container">
          <div className="obs"></div>
        </div>
      </ScheduleTableContainer>
    </WrapperTable>
  );
};
