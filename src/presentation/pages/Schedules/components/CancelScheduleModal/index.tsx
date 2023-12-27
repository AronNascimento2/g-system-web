import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { Container } from "./styles";

export const CancelScheduleModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton icon={faClose} text="Cancelar" onClick={toggleModal} />

      <Container>
        <Modal show={isOpen} handleClose={toggleModal} title={"Cancelar"}>
          <div style={{ paddingBottom: "10px" }}>
            <p>Observação da ligação:</p>
            <textarea name="" id=""></textarea>
          </div>

          <WrapperButton>
            <DynamicButton text="Cancelar" onClick={toggleModal} />
            <DynamicButton text="Salvar" onClick={toggleModal} />
          </WrapperButton>
        </Modal>
      </Container>
    </>
  );
};
