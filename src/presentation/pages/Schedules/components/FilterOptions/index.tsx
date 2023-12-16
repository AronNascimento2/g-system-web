import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";

export const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        icon={faFilter}
        text="Filtrar"
        onClick={toggleModal}
      />

      <Modal show={isOpen} handleClose={toggleModal} title={"Filtrar"}>
        <p>Conteúdo</p>
      </Modal>
    </>
  );
};
