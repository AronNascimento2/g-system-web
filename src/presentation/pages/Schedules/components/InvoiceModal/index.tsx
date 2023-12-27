import React, { useState } from "react";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";

export const InvoiceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton icon={faDollar} text="Faturar" onClick={toggleModal} />

      <Modal show={isOpen} handleClose={toggleModal} title={"Registrar"}>
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
