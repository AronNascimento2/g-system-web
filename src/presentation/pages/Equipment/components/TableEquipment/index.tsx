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

import { HeaderButtonsEquipment } from "../HeaderButtonsEquipment";

// Dados fictícios para a tabela
const data = [
  {
    equipment: 'Equipamento 1',
    status: 'Ativo',
    model: 'Modelo A',
    serialNumber: 'SN001',
    client: 'Cliente A',
    plate: 'ABC1234',
    technician: 'Técnico 1',
    supplier: 'Fornecedor X',
    iccidStatus: 'Ativo',
    m2mOperatorNumber: '1234567890',
    observation: 'Observação sobre o equipamento 1'
  },
  {
    equipment: 'Equipamento 2',
    status: 'Inativo',
    model: 'Modelo B',
    serialNumber: 'SN002',
    client: 'Cliente B',
    plate: 'DEF5678',
    technician: 'Técnico 2',
    supplier: 'Fornecedor Y',
    iccidStatus: 'Inativo',
    m2mOperatorNumber: '0987654321',
    observation: 'Observação sobre o equipamento 2'
  },
  {
    equipment: 'Equipamento 1',
    status: 'Ativo',
    model: 'Modelo A',
    serialNumber: 'SN001',
    client: 'Cliente A',
    plate: 'ABC1234',
    technician: 'Técnico 1',
    supplier: 'Fornecedor X',
    iccidStatus: 'Ativo',
    m2mOperatorNumber: '1234567890',
    observation: 'Observação sobre o equipamento 1'
  },
  {
    equipment: 'Equipamento 2',
    status: 'Inativo',
    model: 'Modelo B',
    serialNumber: 'SN002',
    client: 'Cliente B',
    plate: 'DEF5678',
    technician: 'Técnico 2',
    supplier: 'Fornecedor Y',
    iccidStatus: 'Inativo',
    m2mOperatorNumber: '0987654321',
    observation: 'Observação sobre o equipamento 2'
  },
  {
    equipment: 'Equipamento 1',
    status: 'Ativo',
    model: 'Modelo A',
    serialNumber: 'SN001',
    client: 'Cliente A',
    plate: 'ABC1234',
    technician: 'Técnico 1',
    supplier: 'Fornecedor X',
    iccidStatus: 'Ativo',
    m2mOperatorNumber: '1234567890',
    observation: 'Observação sobre o equipamento 1'
  },
  {
    equipment: 'Equipamento 2',
    status: 'Inativo',
    model: 'Modelo B',
    serialNumber: 'SN002',
    client: 'Cliente B',
    plate: 'DEF5678',
    technician: 'Técnico 2',
    supplier: 'Fornecedor Y',
    iccidStatus: 'Inativo',
    m2mOperatorNumber: '0987654321',
    observation: 'Observação sobre o equipamento 2'
  },
  {
    equipment: 'Equipamento 1',
    status: 'Ativo',
    model: 'Modelo A',
    serialNumber: 'SN001',
    client: 'Cliente A',
    plate: 'ABC1234',
    technician: 'Técnico 1',
    supplier: 'Fornecedor X',
    iccidStatus: 'Ativo',
    m2mOperatorNumber: '1234567890',
    observation: 'Observação sobre o equipamento 1'
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
  { Header: "Observação", accessor: "observation" }
];


export const TableEquipment = () => {
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
        <HeaderButtonsEquipment />
        <div className="container-tabs">
          <div className="register-tab"></div>
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
