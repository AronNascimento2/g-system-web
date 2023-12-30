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

const data = [
  {
    client: "Empresa A",
    person: "João Silva",
    status: "Ativo",
    situation: "Em andamento",
    date: "2023-12-31",
    vehicles: "Carro, Moto",
    monthlyFee: "R$500,00",
    adjustment: "5%",
    proRata: "R$50,00",
    serviceValue: "R$300,00",
    services: "Manutenção, Limpeza",
    total: "R$350,00",
    nfse: "123456789",
    paymentMethod: "Cartão de Crédito",
    wallet: "Carteira A",
    installment: "1/3",
    executedAt: "2023-12-31",
    attachments: "anexo1.pdf",
  },
  {
    client: "Empresa B",
    person: "Maria Oliveira",
    status: "Pendente",
    situation: "Aguardando pagamento",
    date: "2023-12-28",
    vehicles: "Caminhão",
    monthlyFee: "R$800,00",
    adjustment: "10%",
    proRata: "R$80,00",
    serviceValue: "R$600,00",
    services: "Entrega",
    total: "R$680,00",
    nfse: "987654321",
    paymentMethod: "Boleto Bancário",
    wallet: "Carteira B",
    installment: "1/1",
    executedAt: "2023-12-28",
    attachments: "anexo2.pdf",
  },
  // Adicione mais objetos conforme necessário para preencher os dados
];

const columns = [
  { Header: "Cliente", accessor: "client" },
  { Header: "Pessoa", accessor: "person" },
  { Header: "Status", accessor: "status" },
  { Header: "Situação", accessor: "situation" },
  { Header: "Data", accessor: "date" },
  { Header: "Veículos", accessor: "vehicles" },
  { Header: "Mensalidade", accessor: "monthlyFee" },
  { Header: "Reajuste", accessor: "adjustment" },
  { Header: "Pro Rata", accessor: "proRata" },
  { Header: "Valor dos Serviços", accessor: "serviceValue" },
  { Header: "Serviços", accessor: "services" },
  { Header: "Total", accessor: "total" },
  { Header: "NFSe", accessor: "nfse" },
  { Header: "Forma de Pagamento", accessor: "paymentMethod" },
  { Header: "Carteira", accessor: "wallet" },
  { Header: "Parcela", accessor: "installment" },
  { Header: "Realizado em", accessor: "executedAt" },
  { Header: "Anexos", accessor: "attachments" },
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
