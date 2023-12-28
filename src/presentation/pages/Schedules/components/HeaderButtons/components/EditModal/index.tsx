import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { AppointmentProps } from "../../../../types";
import Maps from "../../../../../../components/Maps";
import { Container } from "./styles";

interface Props {
  details: AppointmentProps;
}

export const EditModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <DynamicButton
        icon={faEdit}
        text="Editar"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />

      <Modal show={isOpen} handleClose={toggleModal} title={"Editar"}>
        <div className="container-map">
          <Maps />
        </div>
        <WrapperButton>
          <DynamicButton text="Cancelar" onClick={toggleModal} />
          <DynamicButton text="Confirmar" onClick={toggleModal} />
        </WrapperButton>
      </Modal>
    </Container>
  );
};
