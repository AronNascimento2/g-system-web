import { useEffect, useState } from "react";
import { Appointment, fetchAppointments } from "../../../services/Schedule";
import { Container, ContainerButtons, WrapperTable } from "./styles";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { BarLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowsRotate, faCheck, faClose, faDollar, faEdit, faEnvelope, faFile, faFilter, faGlobe, faTrash } from "@fortawesome/free-solid-svg-icons";

export const SchedulesPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startDate = "2023-10-01";
    const endDate = "2023-10-31";

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAppointments(startDate, endDate);
        setAppointments(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os agendamentos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const tableColumns = [
    { key: "Codigo", title: "Código" },
    { key: "Cliente", title: "Cliente" },
    { key: "Servico", title: "Serviço" },
    { key: "Tipo", title: "Tipo" },
    { key: "Data", title: "Data" },
    { key: "Periodo", title: "Período" },
    { key: "NaoPresencial", title: "Não Presencial" },
    { key: "VisitaTecnica", title: "Visita Técnica" },
    { key: "Endereco", title: "Endereço" },
    { key: "DataCriacao", title: "Data de Criação" },
    { key: "Observacao", title: "Observação" },
    { key: "Verificado", title: "Verificado" },
    { key: "Tecnico", title: "Técnico" },
    { key: "Ordem", title: "Ordem" },
    { key: "CustoServico", title: "Custo do Serviço" },
    { key: "CustoDeslocamento", title: "Custo de Deslocamento" },
    { key: "Custos", title: "Custos" },
    { key: "KM", title: "KM" },
    { key: "CriadoPor", title: "Criado Por" },
    { key: "ValorAdicional", title: "Valor Adicional" },
    { key: "CodigoCliente", title: "Código do Cliente" },
    { key: "CodigoClienteAntigo", title: "Código do Cliente Antigo" },
    { key: "ValorServico", title: "Valor do Serviço" },
    { key: "StatusFaturamento", title: "Status de Faturamento" },
    // { key: 'Veiculos', title: 'Veículos' },
  ];

  return (
    <Container>
      <ContainerButtons className="">
        <Button  icon={<FontAwesomeIcon icon={faArrowsRotate} />}size="small" title="Atualizar" />
        <div className="input-label">
          <select name="" id=""></select>
        </div>
        <Button
          icon={<FontAwesomeIcon icon={faCheck} />}
          size="small"
          title="Confirmar"
        />
        <Button  icon={<FontAwesomeIcon icon={faEdit} />} size="small" title="Editar" />
        <Button icon={<FontAwesomeIcon icon={faClose} />}size="small" title="Cancelar" />
        <Button icon={<FontAwesomeIcon icon={faEdit} />}size="small" title="Registrar" />
        <Button icon={<FontAwesomeIcon icon={faDollar}/>} size="small" title="Faturar" />
        <Button icon={<FontAwesomeIcon icon={faTrash}/>}size="small" title="Excluir" />
        <Button icon={<FontAwesomeIcon icon={faGlobe}/>}size="small" title="Mapa de Serviços" />
        <Button icon={<FontAwesomeIcon icon={faFile}/>} size="small" title="Documentos" />
        <Button icon={<FontAwesomeIcon icon={faEnvelope}/>}size="small" title="Enviar" />
        <Button icon={<FontAwesomeIcon icon={faFilter}/>}size="small" title="Filtrar" />
      </ContainerButtons>
      {loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <WrapperTable>
          <Table rows={appointments} columns={tableColumns} />
        </WrapperTable>
      )}
    </Container>
  );
};
