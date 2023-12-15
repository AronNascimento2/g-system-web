import { useState } from "react";
import {
  formatDate,
  formatDateAndHour,
} from "../../../../utils/formateHourAndDate";
import {
  Container,
  DetailsContent,
  StyledModalMobileDownSide,
  WrapperContent,
} from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import {
  faCheck,
  faClose,
  faDollar,
  faEdit,
  faEnvelope,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../ContentModalTable/styles";
import { AppointmentProps } from "../../types";

export const CardMobile = ({
  appointments,
  searchText,
  handleRowClickCard,
}) => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentProps | null>(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    handleRowClickCard(appointment);
  };

  const closeAndClearModal = () => {
    setSelectedAppointment(null);
  };

  const buttonsData = [
    {
      icon: faCheck,
      text: "Confirmar",
      onClick: () => console.log("Botão Confirmar clicado"),
      disabled: true,
    },
    {
      icon: faDollar,
      text: "Faturar",
      onClick: () => console.log("Botão Faturar clicado"),
      disabled: true,
    },
    {
      icon: faEdit,
      text: "Editar",
      onClick: () => console.log("Botão Editar clicado"),
      disabled: true,
    },
    {
      icon: faTrash,
      text: "Excluir",
      onClick: () => console.log("Botão Excluir clicado"),
      disabled: true,
    },

    {
      icon: faClose,
      text: "Cancelar",
      onClick: () => console.log("Botão Cancelar clicado"),
      disabled: true,
    },
    {
      icon: faEnvelope,
      text: "Enviar",
      onClick: () => console.log("Botão Mapa de Serviços clicado"),
      disabled: true,
    },
    {
      icon: faClose,
      text: "Fechar",
      onClick: closeAndClearModal,
      disabled: false,
    },
  ];

  return (
    <>
      {appointments
        ?.filter((appointment) =>
          appointment.Cliente.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((appointment) => (
          <Container key={appointment.Codigo}>
            <WrapperContent onClick={() => openModal(appointment)}>
              <div className="name-client">
                <p className="name">{appointment.Cliente}</p>
                <span className="code">{appointment.Codigo}</span>
              </div>
              <DetailsContent>
                <div className="content">
                  <div>
                    <p className="title">Serviço</p>{" "}
                    <p className="info">{appointment.Servico}</p>
                  </div>
                  <div>
                    <p className="title">Data</p>
                    <p className="info">{formatDate(appointment.Data)}</p>
                  </div>
                  <div>
                    <p className="title">Período</p>
                    <p className="info">{appointment.Periodo}</p>
                  </div>
                </div>
                <div className="content">
                  <div>
                    <p className="title">Técnico</p>{" "}
                    <p className="info">{appointment.Tecnico}</p>
                  </div>
                  <div>
                    <p className="title">Ordem</p>
                    <p className="info">{appointment.Ordem}</p>
                  </div>
                  <div>
                    <p className="title">Endereço</p>
                    <p className="info-address">{appointment.Endereco}</p>
                  </div>
                </div>
              </DetailsContent>
            </WrapperContent>
          </Container>
        ))}

      {selectedAppointment && (
        <StyledModalMobileDownSide
          className="modal"
          show={!!selectedAppointment}
          handleClose={closeAndClearModal}
        >
          <div className="content">
            <HeaderText>Detalhes do Agendamento </HeaderText>
            <ul>
              <li>
                <strong>Cliente:</strong> {selectedAppointment.Cliente}
              </li>
              <li>
                <strong>Codigo:</strong> {selectedAppointment.Codigo}
              </li>
              <li>
                <strong>Técnico:</strong> {selectedAppointment.Tecnico}
              </li>
              <li>
                <strong>Data:</strong> {formatDate(selectedAppointment.Data)}
              </li>
              <li>
                <strong>Data de criação:</strong>{" "}
                {formatDateAndHour(selectedAppointment.DataCriacao)}
              </li>

              <li>
                <strong>Endereço:</strong> {selectedAppointment.Endereco}
              </li>
              <li>
                <strong>Período:</strong> {selectedAppointment.Periodo}
              </li>
              <li>
                <strong>Valor do serviço:</strong> R${" "}
                {selectedAppointment.ValorServico}
              </li>
              <li>
                <strong>Não Presencial:</strong>{" "}
                {selectedAppointment.NãoPresencial}
              </li>
              <li>
                <strong>Status Faturamento:</strong>{" "}
                {selectedAppointment.StatusFaturamento}
              </li>

              <li>
                <strong>Km:</strong> {selectedAppointment.Km ?? 0}
              </li>
              <li>
                <strong>Ordem:</strong> {selectedAppointment.Ordem}
              </li>

              <li>
                <strong>Verificado:</strong> {selectedAppointment.Verificado}
              </li>
              <li>
                <strong>Visita técnica :</strong>{" "}
                {selectedAppointment.VisitaTecnica}
              </li>
              <li>
                <strong>Cliente antigo:</strong>{" "}
                {selectedAppointment.ClienteAntigo}
              </li>
              <li>
                <strong>Custo do deslocamento:</strong>{" "}
                {selectedAppointment.CustoDeslocamento}
              </li>
              <li>
                <strong>Servico:</strong> {selectedAppointment.Servico}
              </li>

              <li>
                <strong>Tipo:</strong> {selectedAppointment.Tipo}
              </li>
              <li>
                <strong>Custos:</strong> {selectedAppointment.Custos}
              </li>

              <li>
                <strong>Valor adicional:</strong>{" "}
                {selectedAppointment.ValorAdicional}
              </li>
              <li>
                <strong>Status Faturamento:</strong>{" "}
                {selectedAppointment.StatusFaturamento}
              </li>
              <div className="obs">Obs. {selectedAppointment.Observacao}</div>
            </ul>
          </div>
          <div className="buttons-mobile">
            <div className="wrapperbuttons-mobile">
              {buttonsData.map((button, index) => (
                <DynamicButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                  onClick={button.onClick}
                  disabled={button.disabled}
                />
              ))}
            </div>
          </div>
        </StyledModalMobileDownSide>
      )}
    </>
  );
};
