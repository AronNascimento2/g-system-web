import { formatDateAndHour } from "../../../../utils/formateHourAndDate";
import { Container, HeaderText } from "./styles";
import {
  faCheck,
  faEdit,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import React from "react";
import { AppointmentProps } from "../../types";
import { ExcludeModal } from "../ExcludeModal";
import { CancelScheduleModal } from "../CancelScheduleModal";
interface ContentModalTableProps {
  details: AppointmentProps;
}
export const ContentModalTable: React.FC<ContentModalTableProps> = ({
  details,
}) => {
  const buttonsData = [
    {
      icon: faCheck,
      text: "Confirmar",
      onClick: () => console.log("Botão Confirmar clicado"),
      disabled:true
    },

    {
      icon: faEdit,
      text: "Editar",
      onClick: () => console.log("Botão Editar clicado"),
      disabled:true

    },

    {
      icon: faEnvelope,
      text: "Enviar",
      onClick: () => console.log("Botão Mapa de Serviços clicado"),
      disabled:true

    },
  ];

  return (
    <Container>
      <div className="content">
        <HeaderText>Detalhes do Agendamento </HeaderText>
        <div className="list-container">
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
              <strong>Km:</strong> {details.Km ?? 0}
            </li>
            <li>
              <strong>Ordem:</strong> {details.Ordem}
            </li>
            {Array.isArray(details.Veiculos) && details.Veiculos.length > 0 && (
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
            <li>
              <strong>Custo do deslocamento:</strong>{" "}
              {details.CustoDeslocamento}
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
                  disabled={button.disabled}
                />
              ))}
              <CancelScheduleModal />

              <ExcludeModal />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
