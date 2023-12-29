import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { Container } from "./styles";
import { AppointmentProps } from "../../../../types";

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
        width="120px"

        text="Cancelar"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />

      <Container>
        <Modal show={isOpen} handleClose={toggleModal} title={"Cancelar"} className="cancel-modal"           top="45%"
>
          <div style={{ paddingBottom: "10px"}}>
            <p>Confirmar cancelamento do agendamento de <strong>{details?.Cliente}</strong>?</p>
          </div>

          <WrapperButton>
            <DynamicButton text="Cancelar" onClick={toggleModal} width="100px" />
            <DynamicButton text="Confirmar cancelamento" onClick={toggleModal} width="100px"/>
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
