import React, { useState } from "react";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { AppointmentProps } from "../../types";

interface Props {
  details?: AppointmentProps;
}

export const InvoiceModal: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        width="120px"
        icon={faDollar}
        text="Faturar"
        onClick={toggleModal}
      />

      <Modal
        show={isOpen}
        handleClose={toggleModal}
        title={"Faturar"}
        top="110%"
      >
        <div style={{ paddingBottom: "10px" }}>
          <p>
            Alguns agendamentos selecionados possuem veículos que já foram
            faturados ,os mesmos serão IGNORADOS
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
