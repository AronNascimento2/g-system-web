import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";

export const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button
      className="open-options-button"
        icon={<FontAwesomeIcon icon={faFilter} />}
        size="small"
        title="Filtrar"
        onClick={toggleModal}
      />

      <Modal show={isOpen} handleClose={toggleModal} title={"Filtrar"}>
        <p>Conteúdo</p>
      </Modal>
    </Container>
  );
};
