import { useEffect, useState } from "react";
import { Appointment, fetchAppointments } from "../../../services/Schedule";
import { Container, ContainerButtons, WrapperTable } from "./styles";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";

export const SchedulesPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const startDate = "2023-10-01";
    const endDate = "2023-10-31";

    const fetchData = async () => {
      try {
        const data = await fetchAppointments(startDate, endDate);
        setAppointments(data);
      } catch (error) {
        console.error("Erro ao buscar os agendamentos:", error);
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
        <Button size="small" title="Atualizar" />
        <div  className="input-label">
          <select name="" id=""></select>
        </div>
        <Button size="small" title="Confirmar" />
        <Button size="small" title="Editar" />
        <Button size="small" title="Cancelar" />
        <Button size="small" title="Registrar" />
        <Button size="small" title="Faturar" />
        <Button size="small" title="Excluir" />
        <Button size="small" title="Mapa de Serviços" />
        <Button size="small" title="Documentos" />
        <Button size="small" title="Enviar" />
        <Button size="small" title="Filtrar" />
      </ContainerButtons>

      <WrapperTable>
        <Table rows={appointments} columns={tableColumns} />
      </WrapperTable>
    </Container>
  );
};
