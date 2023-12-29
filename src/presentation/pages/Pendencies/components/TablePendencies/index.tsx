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
import { HeaderButtonsPendencies } from "../HeaderButtonsPendencies";
  
  // Dados fictícios para a tabela
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
  
  
  // Definição das colunas
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
          <HeaderButtonsPendencies />
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
  