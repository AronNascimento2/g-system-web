import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { ScheduleTableContainer } from "./styles";
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
import { HeaderButtons } from "../../pages/Schedules/components/HeaderButtons";
import { ContainerButtons } from "../../pages/Schedules/styles";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";

// Definição do componente da tabela
export const ReactTable = ({
  columns,
  data,
  handleRowClick,
  fetchData,
  handleSearch,
  searchText,
  loading,
}) => {
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
      initialState: { pageIndex: 0, pageSize: 14 },
    },
    useFilters, // Utilizando filtros
    useGlobalFilter, // Utilizando o filtro global
    useSortBy, // Habilitando a ordenação
    usePagination // Adicionando paginação
  );

  const { pageIndex } = state;

  useEffect(() => {
    setGlobalFilter(searchText || undefined);
  }, [searchText, setGlobalFilter]);
  return (
    <ScheduleTableContainer>
      <ContainerButtons>
        <HeaderButtons
          update={fetchData}
          onSearch={handleSearch}
          searchText={searchText}
        />
      </ContainerButtons>

      {loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          <div className="div" {...getTableProps()}>
            <table>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {/* Adicionando ícone de ordenação */}
                        <div className="container-th">
                          {column.render("Header")}
                          <span className="icon-sort">
                            {column.canSort ? (
                              column.isSorted ? (
                                column.isSortedDesc ? (
                                  <FontAwesomeIcon icon={faSortDown} />
                                ) : (
                                  <FontAwesomeIcon icon={faSortUp} />
                                )
                              ) : (
                                <FontAwesomeIcon icon={faSort} />
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
                    <tr
                      {...row.getRowProps()}
                      onClick={() => handleRowClick(row.original)}
                    >
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
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>{" "}
            <button
              className="buttons"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>{" "}
            <button
              className="buttons"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>{" "}
            <button
              className="buttons"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
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
        </>
      )}
    </ScheduleTableContainer>
  );
};
