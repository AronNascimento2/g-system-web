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

import { HeaderButtonsCharges } from "../HeaderButtonsCharges";

// Dados fictícios para a tabela
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

// Definição das colunas
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
        <HeaderButtonsCharges />
        <div className="container-tabs">
          <div className="register-tab"></div>
          <div className="filter-tab"></div>
        </div>
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
