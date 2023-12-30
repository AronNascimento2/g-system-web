import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { ScheduleTableContainer, WrapperTable } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { HeaderButtonsSupervision } from "../HeaderButtonsSupervision";

// Dados fictícios para a tabela
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

export const TableSupervision = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters, // Utilizando filtros
    useGlobalFilter, // Utilizando o filtro global
    useSortBy, // Habilitando a ordenação
    usePagination // Adicionando paginação
  );
  const { pageIndex } = state;
  useEffect(() => {
    setGlobalFilter(undefined);
  }, [setGlobalFilter]);
  return (
    <WrapperTable>
      <ScheduleTableContainer>
        <HeaderButtonsSupervision />

        <div className="box" {...getTableProps()}>
          <table>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {/* Adicionando ícone de ordenação */}
                      <div className="container-th">
                        {column.render("Header")}
                        <span className="icon-sort">
                          {column.canSort ? (
                            column.isSorted ? (
                              column.isSortedDesc ? (
                                <FontAwesomeIcon
                                  icon={faSortDown as IconProp}
                                />
                              ) : (
                                <FontAwesomeIcon icon={faSortUp as IconProp} />
                              )
                            ) : (
                              <FontAwesomeIcon icon={faSort as IconProp} />
                            )
                          ) : null}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container-pagination">
          <button
            className="buttons"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FontAwesomeIcon icon={faAnglesLeft as IconProp} />
          </button>{" "}
          <button
            className="buttons"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FontAwesomeIcon icon={faAngleLeft as IconProp} />
          </button>{" "}
          <button
            className="buttons"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FontAwesomeIcon icon={faAngleRight as IconProp} />
          </button>{" "}
          <button
            className="buttons"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FontAwesomeIcon icon={faAnglesRight as IconProp} />
          </button>{" "}
          <span className="page-text">
            Página <strong>{pageIndex + 1} </strong>de{" "}
            <strong>{pageOptions.length}</strong>{" "}
          </span>
          <span className="input-page-text">
            | Ir para página:{" "}
            <input
              className="input-page"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>{" "}
        </div>
        <div className="obs-container">
          <div className="obs"></div>
        </div>
      </ScheduleTableContainer>
    </WrapperTable>
  );
};
