import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { Container } from "./styles";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from "date-fns/locale/es";
import { Modal } from "../../../../components/Modal";
import { AppointmentProps } from "../../types";
registerLocale("es", es);

interface Props {
  details: AppointmentProps;
}

export const ConfirmModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DynamicButton
        icon={faCheck}
        text="Confirmar"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />

      <Container>
        <Modal
          width="710px"
          height="500px"
          position="top: 30%; left: 50%;"
          show={isOpen}
          handleClose={toggleModal}
          title={"Confirmar"}
        >
          <div className="client-container">
            <div className="client-data">
              <p>Cliente:</p>
              <p>{details?.Cliente}</p>
            </div>
            <div className="client-data">
              <p>Veículo:</p>
              <p>THX3H42 - Fiat Palio Prata</p>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
            />
          </div>
          <div className="wrapper">
            <div className="form-client">
              <div className="client-details">
                <div className="container">
                  <p>Equipamento:</p>
                  <select name="" id=""></select>
                </div>
                <div className="container">
                  <p>Técnico:</p>
                  <select name="" id=""></select>
                </div>
                <div className="container">
                  <p>Local de inst.:</p>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
              <div className="client-details">
                <div className="container">
                  <p>Login/Senha:</p>
                  <select name="" id=""></select>
                </div>
                <div className="container">
                  <p>Perfil da Plataforma:</p>
                  <select name="" id=""></select>
                </div>
                <div className="container">
                  <p>Envio Automático:</p>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
            </div>
            <div className="car-details">
              <p>a</p>
            </div>
          </div>
          <div className="details"></div>

          <WrapperButton>
            <DynamicButton text="Cancelar" onClick={toggleModal} />
            <DynamicButton
              text="Concluir Serviço realizado"
              onClick={toggleModal}
            />
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
