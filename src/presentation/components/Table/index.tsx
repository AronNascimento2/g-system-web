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
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { formatDateAndHour } from "../../utils/formateHourAndDate";

// Definição do componente da tabela
export const ReactTable = ({
  columns,
  data,
  handleRowClick,
  fetchData,
  handleSearch,
  searchText,
  loading,
  details,
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
      initialState: { pageIndex: 0, pageSize: 10 },
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
  console.log("sdds", details);

  return (
    <ScheduleTableContainer>
      <ContainerButtons>
        <HeaderButtons
          details={details}
          update={fetchData}
          onSearch={handleSearch}
          searchText={searchText}
        />
      </ContainerButtons>

      {loading ? (
        <div className="loader-container">
          <ClipLoader size={80} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          <div className="box" {...getTableProps()}>
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
                                  <FontAwesomeIcon
                                    icon={faSortDown as IconProp}
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faSortUp as IconProp}
                                  />
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
        </>
      )}
      <div className="obs-container">
          <div className="obs">
        {details && (
            <><ul>
              <li>
                <strong>Codigo:</strong> {details?.Cliente}
              </li>
              <li>
                <strong>Codigo:</strong> {details.Codigo}
              </li>
              <li>
                <strong>Técnico:</strong> {details.Tecnico}
              </li>
              <li>
                <strong>Data:</strong> {details.Data}
              </li>
              <li>
                <strong>Data de criação:</strong>{" "}
                {formatDateAndHour(details.DataCriacao)}
              </li>

              <li>
                <strong>Endereço:</strong> {details.Endereco}
              </li>
              <li>
                <strong>Período:</strong> {details.Periodo}
              </li>
              <li>
                <strong>Valor do serviço:</strong> R$ {details.ValorServico}
              </li>
              <li>
                <strong>Não Presencial:</strong> {details.NãoPresencial}
              </li>
              <li>
                <strong>Status Faturamento:</strong> {details.StatusFaturamento}
              </li>
            </ul><ul>
                {Array.isArray(details.Veiculos) &&
                  details.Veiculos.length > 0 && (
                    <li>
                      <strong>Veículos :</strong>{" "}
                      {details.Veiculos.map((veiculo: any, index: number) => (
                        <div key={index}>
                          <p>
                            [ Código do Veículo: {veiculo.CodigoVeiculo}, Status:{" "}
                            {veiculo.Status}, Veiculo: {veiculo.Veiculo} ]
                          </p>
                        </div>
                      ))}
                    </li>
                  )}

                <li>
                  <strong>Verificado:</strong> {details.Verificado}
                </li>
                <li>
                  <strong>Visita técnica :</strong> {details.VisitaTecnica}
                </li>
                <li>
                  <strong>Cliente antigo:</strong> {details.ClienteAntigo}
                </li>
              </ul><ul>
                <li>
                  <strong>Custo do deslocamento:</strong>{" "}
                  {details.CustoDeslocamento}
                </li>
                <li>
                  <strong>Servico:</strong> {details.Servico}
                </li>
                <li>
                  <strong>Km:</strong> {details.Km ?? 0}
                </li>
                <li>
                  <strong>Ordem:</strong> {details.Ordem}
                </li>
                <li>
                  <strong>Tipo:</strong> {details.Tipo}
                </li>
                <li>
                  <strong>Custos:</strong> {details.Custos}
                </li>

                <li>
                  <strong>Valor adicional:</strong> {details.ValorAdicional}
                </li>
                <li>
                  <strong>Status Faturamento:</strong> {details.StatusFaturamento}
                </li>
                <li>
                  <strong>Obs.</strong> {details.Observacao}
                </li>
              </ul></>
        )}
          </div>
      </div>
    </ScheduleTableContainer>
  );
};
