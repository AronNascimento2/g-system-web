import { ScheduleTableContainer, WrapperTable } from "./styles";
import { HeaderButtonsDirection } from "../HeaderButtonsDirection";
import { ListTabMenu } from "../ListTabMenu";
import { DynamicTable } from "../../../../components/DynamicTable";

const data = [
  {
    id: 1,
    name: "Google Adword",
    type: "Despesa",
    status: "Pendente",
    date: "2023-12-29",
    registration: "",
    category: "Publicidades",
    flag: "",
    attachments: "0",
    box: "G-system",
    value: "R$400.00",
    executedValue: "R$0.00",
    executionDate: "",
    executedBy: "",
  },

  {
    id: 2,
    name: "Google Adword",
    type: "Despesa",
    status: "Pendente",
    date: "2023-12-29",
    registration: "",
    category: "Publicidades",
    flag: "",
    attachments: "0",
    box: "G-system",
    value: "R$400.00",
    executedValue: "R$0.00",
    executionDate: "",
    executedBy: "",
  },
  {
    id: 3,
    name: "Google Adword",
    type: "Despesa",
    status: "Pendente",
    date: "2023-12-29",
    registration: "",
    category: "Publicidades",
    flag: "",
    attachments: "0",
    box: "G-system",
    value: "R$400.00",
    executedValue: "R$0.00",
    executionDate: "",
    executedBy: "",
  },
  {
    id: 4,
    name: "Google Adword",
    type: "Despesa",
    status: "Pendente",
    date: "2023-12-29",
    registration: "",
    category: "Publicidades",
    flag: "",
    attachments: "0",
    box: "G-system",
    value: "R$400.00",
    executedValue: "R$0.00",
    executionDate: "",
    executedBy: "",
  },
  {
    id: 5,
    name: "Google Adword",
    type: "Despesa",
    status: "Pendente",
    date: "2023-12-29",
    registration: "",
    category: "Publicidades",
    flag: "",
    attachments: "0",
    box: "G-system",
    value: "R$400.00",
    executedValue: "R$0.00",
    executionDate: "",
    executedBy: "",
  },
];
const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "Nome", accessor: "name" },
  { Header: "Tipo", accessor: "type" },
  { Header: "Situação", accessor: "status" },
  { Header: "Data", accessor: "date" },
  { Header: "Cadastro", accessor: "registration" },
  { Header: "Categoria", accessor: "category" },
  { Header: "Sinalizar", accessor: "flag" },
  { Header: "Anexos", accessor: "attachments" },
  { Header: "Caixa", accessor: "box" },
  { Header: "Valor", accessor: "value" },
  { Header: "Valor Efetivado", accessor: "executedValue" },
  { Header: "Data Efetivação", accessor: "executionDate" },
  { Header: "Efetivado por", accessor: "executedBy" },
];

export const TableDirection = () => {
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsDirection />
        <div className="container-tabs">
          <div className="register-tab"></div>
        </div>
        <div>
          <ListTabMenu />
        </div>
        <DynamicTable columns={columns} data={data} />
        <div className="obs-container">
          <div className="obs"></div>
        </div>
      </ScheduleTableContainer>
    </WrapperTable>
  );
};
