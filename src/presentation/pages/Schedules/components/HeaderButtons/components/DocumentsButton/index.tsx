import React, { useState } from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { Modal } from "../../../../../../components/Modal";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";

export const DocumentsButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        icon={faFile}
        text="Documentos"
        onClick={toggleModal}
        width="120px"
      />
      <Modal
        show={isOpen}
        handleClose={toggleModal}
        title={"Excluir"}
        className="exclude-modal"
      >
        <WrapperButton>
          <DynamicButton text="Não" onClick={toggleModal} width="100px" />
          <DynamicButton text="Sim" onClick={toggleModal} width="100px" />
        </WrapperButton>
      </Modal>
    </>
  );
};
