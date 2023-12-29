import React, { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const FilterOptions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton icon={faFilter} text="Filtrar" onClick={toggleModal} />

      <Container>
        <Modal show={isOpen} handleClose={toggleModal} title={"Filtrar"} className="filter-modal">
          <p>Conteúdo</p>
        </Modal>
      </Container>
    </>
  );
};
