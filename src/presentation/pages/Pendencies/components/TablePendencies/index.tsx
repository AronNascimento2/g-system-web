import { ScheduleTableContainer, WrapperTable } from "./styles";
import { HeaderButtonsPendencies } from "../HeaderButtonsPendencies";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    id: 1,
    attachments: "0",
    layout: "Padrão",
    client: "Company X",
    status: "Pending",
    vehicleType: "Car",
    openedBy: "Alice",
    situation: "Under Review",
    supplier: "Supplier Y",
    occurrenceDate: "2023-12-25",
    defect: "Mechanical",
    occurrenceLocation: "Main Street",
    destination: "Warehouse",
    channel: "Email",
  },
  {
    id: 2,
    attachments: "0",
    layout: "Padrão",
    client: "Company Z",
    status: "Resolved",
    vehicleType: "Truck",
    openedBy: "Bob",
    situation: "Closed",
    supplier: "Supplier X",
    occurrenceDate: "2023-11-15",
    defect: "Electrical",
    occurrenceLocation: "Highway 101",
    destination: "Factory",
    channel: "Phone",
  },
  {
    id: 3,
    attachments: "0",
    layout: "Padrão",
    client: "Company Z",
    status: "Resolved",
    vehicleType: "Truck",
    openedBy: "Bob",
    situation: "Closed",
    supplier: "Supplier X",
    occurrenceDate: "2023-11-15",
    defect: "Electrical",
    occurrenceLocation: "Highway 101",
    destination: "Factory",
    channel: "Phone",
  },
  {
    id: 4,
    attachments: "0",
    layout: "Padrão",
    client: "Company Z",
    status: "Resolved",
    vehicleType: "Truck",
    openedBy: "Bob",
    situation: "Closed",
    supplier: "Supplier X",
    occurrenceDate: "2023-11-15",
    defect: "Electrical",
    occurrenceLocation: "Highway 101",
    destination: "Factory",
    channel: "Phone",
  },
  {
    id: 5,
    attachments: "0",
    layout: "Padrão",
    client: "Company Z",
    status: "Resolved",
    vehicleType: "Truck",
    openedBy: "Bob",
    situation: "Closed",
    supplier: "Supplier X",
    occurrenceDate: "2023-11-15",
    defect: "Electrical",
    occurrenceLocation: "Highway 101",
    destination: "Factory",
    channel: "Phone",
  },
];

const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "Anexos", accessor: "attachments" },
  { Header: "Layout", accessor: "layout" },
  { Header: "Cliente", accessor: "client" },
  { Header: "Status", accessor: "status" },
  { Header: "Tipo de Veículos", accessor: "vehicleType" },
  { Header: "Aberto por", accessor: "openedBy" },
  { Header: "Situação", accessor: "situation" },
  { Header: "Fornecedor", accessor: "supplier" },
  { Header: "Data de Ocorrência", accessor: "occurrenceDate" },
  { Header: "Defeito", accessor: "defect" },
  { Header: "Local da Ocorrência", accessor: "occurrenceLocation" },
  { Header: "Destino", accessor: "destination" },
  { Header: "Canal", accessor: "channel" },
];

export const TablePendencies = () => {
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsPendencies />
        <div className="container-tabs">
          <div className="register-tab"></div>
          <div className="filter-tab"></div>
        </div>
        <DynamicTable columns={columns} data={data} />
        <div className="obs-container">
          <div className="obs"></div>
        </div>
      </ScheduleTableContainer>
    </WrapperTable>
  );
};
