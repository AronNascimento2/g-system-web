import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AppointmentProps } from "../../../../types";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { Modal } from "../../../../../../components/Modal";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { Container } from "./styles";

interface Props {
  details: AppointmentProps;
}
export const ExcludeModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        icon={faTrash}
        text="Excluir"
        onClick={toggleModal}
        disabled={!details?.Codigo}
        width="120px"
      />
      <Container>
        <Modal
          show={isOpen}
          handleClose={toggleModal}
          title={"Excluir"}
          className="exclude-modal"
          top="45%"
        >
          <p>
            Gostaria de excluir permanentemente o agendamento de{" "}
            <strong>{details?.Cliente}</strong>?
          </p>

          <WrapperButton>
            <DynamicButton text="Não" onClick={toggleModal} width="100px" />
            <DynamicButton text="Sim" onClick={toggleModal} width="100px" />
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
