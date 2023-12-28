import React, { useState } from "react";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { AppointmentProps } from "../../types";

interface Props {
  details: AppointmentProps;
}
export const ExcludeModal: React.FC <Props> = ({details}) => {
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
      />

      <Modal show={isOpen} handleClose={toggleModal} title={"Excluir"}>
        <p>Gostaria de excluir permanentemente o agendamento selecionado ?</p>

        <WrapperButton>
            <DynamicButton text="Não" onClick={toggleModal}/>
            <DynamicButton text="Sim" onClick={toggleModal}/>

        </WrapperButton>
      </Modal>
    </>
  );
};
