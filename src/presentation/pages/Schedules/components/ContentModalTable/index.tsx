import {
  formatDateAndHour,
} from "../../../../utils/formateHourAndDate";
import { Container, HeaderText } from "./styles";
import {
  faCheck,
  faClose,
  faDollar,
  faEdit,
  faEnvelope,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";

export const ContentModalTable = ({ details }) => {
  const buttonsData = [
    {
      icon: faCheck,
      text: "Confirmar",
      onClick: () => console.log("Botão Confirmar clicado"),
    },
    {
      icon: faDollar,
      text: "Faturar",
      onClick: () => console.log("Botão Faturar clicado"),
    },
    {
      icon: faEdit,
      text: "Editar",
      onClick: () => console.log("Botão Editar clicado"),
    },
    {
      icon: faTrash,
      text: "Excluir",
      onClick: () => console.log("Botão Excluir clicado"),
    },

    {
      icon: faClose,
      text: "Cancelar",
      onClick: () => console.log("Botão Cancelar clicado"),
    },
    {
      icon: faEnvelope,
      text: "Enviar",
      onClick: () => console.log("Botão Mapa de Serviços clicado"),
    },
  ];

console.log("asasa",details.Data);

  return (
    <Container>
      <div className="content">
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
          <div className="obs">Obs. {details.Observacao}</div>
        </ul>

        <div className="buttons">
          <div className="wrapperbuttons">
            {buttonsData.map((button, index) => (
              <DynamicButton
                key={index}
                icon={button.icon}
                text={button.text}
                onClick={button.onClick}
                disabled
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
