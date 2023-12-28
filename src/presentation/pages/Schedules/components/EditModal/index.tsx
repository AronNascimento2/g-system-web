import React, { useState } from "react";
import {  faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { AppointmentProps } from "../../types";

interface Props {
  details: AppointmentProps;
}

export const EditModal: React.FC<Props> = ({details}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton icon={faEdit} text="Editar" onClick={toggleModal}         disabled={!details?.Codigo}
/>

      <Modal show={isOpen} handleClose={toggleModal} title={"Editar"}>
        <div style={{ paddingBottom: "10px" }}>
          <p>
           
          </p>
        </div>

        <WrapperButton>
          <DynamicButton text="Cancelar" onClick={toggleModal} />
          <DynamicButton text="Confirmar" onClick={toggleModal} />
        </WrapperButton>
      </Modal>
    </>
  );
};
