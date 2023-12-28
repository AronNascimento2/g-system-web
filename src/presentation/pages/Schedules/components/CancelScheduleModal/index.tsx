import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { Container } from "./styles";
import { AppointmentProps } from "../../types";

interface Props {
  details: AppointmentProps;
}

export const CancelScheduleModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        icon={faClose}
        text="Cancelar"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />

      <Container>
        <Modal show={isOpen} handleClose={toggleModal} title={"Cancelar"}>
          <div style={{ paddingBottom: "10px" }}>
            <p>Confirmar cancelamento</p>
          </div>

          <WrapperButton>
            <DynamicButton text="Cancelar" onClick={toggleModal} />
            <DynamicButton text="Confirmar cancelamento" onClick={toggleModal} />
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
