import { useState } from "react";
import {
  formatDate,
} from "../../../../utils/formateHourAndDate";
import { Container, DetailsContent, StyledModalMobileDownSide, WrapperContent } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import {
  faCheck,
  faClose,
  faDollar,
  faEdit,
  faEnvelope,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../ContentModal/styles";

export const CardMobile = ({ appointments, searchText }) => {
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.Cliente.toLowerCase().includes(searchText.toLowerCase())
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

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
  return (
    <>
      {filteredAppointments.map((appointment) => {
        return (
          <Container key={appointment.Codigo}>
            <WrapperContent>
              <div className="name-client" onClick={openModal}>
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
        );
      })}

      <StyledModalMobileDownSide className='modal' show={modalIsOpen} handleClose={openModal}>
        <div className="content">
          <HeaderText>Detalhes do Agendamento </HeaderText>
          <ul>
            <li>
              <strong>Cliente:</strong>
            </li>
            <li>
              <strong>Codigo:</strong>
            </li>
            <li>
              <strong>Técnico:</strong>
            </li>
            <li>
              <strong>Data:</strong>
            </li>
            <li>
              <strong>Data de criação:</strong>{" "}
            </li>

            <li>
              <strong>Endereço:</strong>
            </li>
            <li>
              <strong>Período:</strong>
            </li>
            <li>
              <strong>Valor do serviço:</strong> R$
            </li>
            <li>
              <strong>Não Presencial:</strong>
            </li>
            <li>
              <strong>Status Faturamento:</strong>
            </li>
            <li>
              <strong>Veiculos:</strong>
            </li>
            <li>
              <strong>Km:</strong>
            </li>
            <li>
              <strong>Ordem:</strong>
            </li>

            <li>
              <strong>Verificado:</strong>
            </li>
            <li>
              <strong>Visita técnica :</strong>
            </li>
            <li>
              <strong>Cliente antigo:</strong>
            </li>
            <li>
              <strong>Custo do deslocamento:</strong>
            </li>
            <li>
              <strong>Servico:</strong>
            </li>

            <li>
              <strong>Tipo:</strong>
            </li>
            <li>
              <strong>Custos:</strong>
            </li>

            <li>
              <strong>Valor adicional:</strong>
            </li>
            <li>
              <strong>Status Faturamento:</strong>
            </li>
            <div className="obs">Obs. </div>
          </ul>
        </div>
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
      </StyledModalMobileDownSide>
    </>
  );
};
