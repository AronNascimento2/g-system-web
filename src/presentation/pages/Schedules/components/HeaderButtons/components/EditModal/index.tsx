import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { AppointmentProps } from "../../../../types";
import Maps from "../../../../../../components/Maps";
import { Container } from "./styles";
import DatePicker from "react-datepicker";

interface Props {
  details: AppointmentProps;
}

export const EditModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        width="120px"
        icon={faEdit}
        text="Editar"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />
      <Container>
        <Modal
          show={isOpen}
          handleClose={toggleModal}
          title={"Editar"}
          className="edit-modal"
          top="45%"
        >
          <div className="client-container">
            <div className="client-data">
              <p>Serviço:</p>
              <p>{details?.Servico}</p>
              <p>Tipo:</p>
              <select name="" id=""></select>
            </div>
            <div className="client-data">
              <p>Técnico:</p>
              <p>{details?.Tecnico}</p>
            </div>
            <div className="client-data">
              <p>Endereço:</p>
              <p className="adress">{details?.Endereco}</p>
            </div>
            <div className="client-data">
              <p>Data:</p>
              <p>Presencial</p>
              <DatePicker />
              <p>Período:</p>
              <p>{details?.Periodo}</p>
            </div>
            <div className="client-data">
              <p>Observação:</p>
              <p className="obs">{details?.Observacao}</p>
            </div>
          </div>

          <div className="container-map">
            <Maps />
          </div>
          <WrapperButton>
            <DynamicButton text="Cancelar" onClick={toggleModal} />
            <DynamicButton text="Confirmar" onClick={toggleModal} />
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
