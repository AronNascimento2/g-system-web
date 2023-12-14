import { formatDate, formatDateAndHour } from "../../../../utils/formateHourAndDate";
import { Container, HeaderText } from "./styles";

export const ContentModal = ({details}) => {
 
  
  return (
    <Container>
      <HeaderText>Detalhes do Agendamento </HeaderText>
      <ul>
        <li>
          <strong>Cliente:</strong> {details.Cliente}
        </li>
        <li>
          <strong>Codigo:</strong> {details.Codigo}
        </li>
        <li>
          <strong>Técnico:</strong> {details.Tecnico}
        </li>
        <li>
          <strong>Data:</strong> {formatDate(details.Data)}
        </li>
        <li>
          <strong>Data de criação:</strong> {formatDateAndHour(details.DataCriacao)}
        </li>
        <li>
          <strong>Observação:</strong> {details.Observacao}
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
        <li>
          <strong>Veiculos:</strong> {details.Veiculos.Status}
        </li>
        <li>
          <strong>Km:</strong> {details.Km || 0}
        </li>
        <li>
          <strong>Ordem:</strong> {details.Ordem}
        </li>
        
        <li>
          <strong>Verificado:</strong> {details.Verificado}
        </li>
        <li>
          <strong>Visita técnica :</strong> {details.VisitaTecnica}
        </li>
        <li>
          <strong>Cliente antigo:</strong> {details.ClienteAntigo}
        </li>
        <li>
          <strong>Custo do deslocamento:</strong> {details.CustoDeslocamento}
        </li>
        <li>
          <strong>Servico:</strong> {details.Servico}
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
      </ul>
    </Container>
  );
};
