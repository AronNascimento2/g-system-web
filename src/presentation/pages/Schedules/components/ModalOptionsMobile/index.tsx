import React, { useState } from "react";
import {
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";

export const ModalOptionsMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };



  return (
    <Container>
      <button className="open-options-button" onClick={toggleModal}>
        <FontAwesomeIcon className="collapsed-icon" icon={faEllipsisVertical} />
      </button>

      <ModalMobileDownSide show={isOpen} handleClose={toggleModal} className="modal">
        <div className="buttons-wrapper">
         
         
        </div>
      </ModalMobileDownSide>
    </Container>
  );
};
