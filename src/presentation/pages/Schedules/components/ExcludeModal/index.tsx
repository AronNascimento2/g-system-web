import React, { useState } from "react";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";

export const ExcludeModal: React.FC = () => {
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
