import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";

export const FilterOptionsMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <button className="open-options-button" onClick={toggleModal}>
        <FontAwesomeIcon className="collapsed-icon" icon={faFilter} />
      </button>

      <ModalMobileDownSide show={isOpen} handleClose={toggleModal}>conteúdo</ModalMobileDownSide>
    </Container>
  );
};
