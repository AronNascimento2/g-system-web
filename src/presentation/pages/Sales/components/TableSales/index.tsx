import { ScheduleTableContainer, WrapperTable } from "./styles";
import { HeaderButtonsSales } from "../HeaderButtonsSales";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    name: "João",
    type: "",
    interest: "",
    advertising: "Facebook",
    seller: "",
    lastObSeller: "Não atende",
    lastObAttendance: "Indicado por Jeferson Igor Gomes",
    return: "",
    channel: "Whatsapp",
  },
  {
    name: "João",
    type: "",
    interest: "",
    advertising: "Facebook",
    seller: "",
    lastObSeller: "Não atende",
    lastObAttendance: "Indicado por Jeferson Igor Gomes",
    return: "",
    channel: "Whatsapp",
  },
  {
    name: "João",
    type: "",
    interest: "",
    advertising: "Facebook",
    seller: "",
    lastObSeller: "Não atende",
    lastObAttendance: "Indicado por Jeferson Igor Gomes",
    return: "",
    channel: "Whatsapp",
  },
  {
    name: "João",
    type: "",
    interest: "",
    advertising: "Facebook",
    seller: "",
    lastObSeller: "Não atende",
    lastObAttendance: "Indicado por Jeferson Igor Gomes",
    return: "",
    channel: "Whatsapp",
  },
  {
    name: "João",
    type: "",
    interest: "",
    advertising: "Facebook",
    seller: "",
    lastObSeller: "Não atende",
    lastObAttendance: "Indicado por Jeferson Igor Gomes",
    return: "",
    channel: "Whatsapp",
  },
];

const columns = [
  { Header: "Nome", accessor: "name" },
  { Header: "Tipo", accessor: "type" },
  { Header: "Interesse", accessor: "interest" },
  { Header: "Publicidade", accessor: "advertising" },
  { Header: "Vendedor", accessor: "seller" },
  { Header: "Última obs. do vendedor", accessor: "lastObSeller" },
  { Header: "Última obs. do atendente", accessor: "lastObAttendance" },
  { Header: "Retorno", accessor: "return" },
  { Header: "Canal", accessor: "channel" },
];

export const TableSales = () => {

  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsSales />
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
