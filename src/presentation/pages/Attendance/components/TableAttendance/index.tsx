import { ScheduleTableContainer, WrapperTable } from "./styles";

import { HeaderButtonsAttendance } from "../HeaderButtonsAttendance";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    name: "João",
    interest: "",
    firstphone: "(11)00000-0000",
    secondphone: "(11)00000-0000",
    email: "email@email.com.br",
    channel: "WhatsApp",
    open: "",
    cp: "",
    Acti: "",
  },
  {
    name: "João",
    interest: "",
    firstphone: "(11)00000-0000",
    secondphone: "(11)00000-0000",
    email: "email@email.com.br",
    channel: "WhatsApp",
    open: "",
    cp: "",
    Acti: "",
  },
  {
    name: "João",
    interest: "",
    firstphone: "(11)00000-0000",
    secondphone: "(11)00000-0000",
    email: "email@email.com.br",
    channel: "WhatsApp",
    open: "",
    cp: "",
    Acti: "",
  },
];

const columns = [
  { Header: "Nome", accessor: "name" },
  { Header: "Interesse", accessor: "interest" },
  { Header: "1º telefone", accessor: "firstphone" },
  { Header: "1º telefone", accessor: "secondphone" },
  { Header: "Email", accessor: "email" },
  { Header: "Canal", accessor: "channel" },
  { Header: "Aberto", accessor: "open" },
  { Header: "Capit", accessor: "cp" },
  { Header: "Ativid", accessor: "Acti" },
];

export const TableAttendance = () => {
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsAttendance />
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
