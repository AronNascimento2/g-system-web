import { ScheduleTableContainer, WrapperTable } from "./styles";
import { HeaderButtonsCharges } from "../HeaderButtonsCharges";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    client: "João",
    employe: "G-system Ltda.",
    status: "Ativado",
    days: "3657",
    quant: 7,
    value: "R$574.00",
    type: "",
    return: "",
    suspend: "",
    negative: "",
    lastOb: "Não atende",
  },
  {
    client: "João",
    employe: "G-system Ltda.",
    status: "Ativado",
    days: "3657",
    quant: 7,
    value: "R$574.00",
    type: "",
    return: "",
    suspend: "",
    negative: "",
    lastOb: "Não atende",
  },
  {
    client: "João",
    employe: "G-system Ltda.",
    status: "Ativado",
    days: "3657",
    quant: 7,
    value: "R$574.00",
    type: "",
    return: "",
    suspend: "",
    negative: "",
    lastOb: "Não atende",
  },
  {
    client: "João",
    employe: "G-system Ltda.",
    status: "Ativado",
    days: "3657",
    quant: 7,
    value: "R$574.00",
    type: "",
    return: "",
    suspend: "",
    negative: "",
    lastOb: "Não atende",
  },
  {
    client: "João",
    employe: "G-system Ltda.",
    status: "Ativado",
    days: "3657",
    quant: 7,
    value: "R$574.00",
    type: "",
    return: "",
    suspend: "",
    negative: "",
    lastOb: "Não atende",
  },
];

const columns = [
  { Header: "Cliente", accessor: "client" },
  { Header: "Empresa", accessor: "employe" },
  { Header: "Status", accessor: "status" },
  { Header: "Dias", accessor: "days" },
  { Header: "Quant.", accessor: "quant." },
  { Header: "Valor", accessor: "value" },
  { Header: "Tipo", accessor: "type" },
  { Header: "Retorno", accessor: "return" },
  { Header: "Suspenso", accessor: "suspend" },
  { Header: "Negativado", accessor: "negative" },
  { Header: "Últ. observação", accessor: "lastOb" },
];

export const TableCharges = () => {
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsCharges />
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
