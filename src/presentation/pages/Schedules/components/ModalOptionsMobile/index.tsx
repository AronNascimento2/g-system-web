import React, { useState } from "react";
import {
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";
import { RegisterModal } from "../HeaderButtons/components/RegisterModal";
import { InvoiceModal } from "../InvoiceModal";
import { ModalMaps } from "../HeaderButtons/components/ModalMaps";

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
         
          <InvoiceModal />
          <ModalMaps />
          <RegisterModal />
        </div>
      </ModalMobileDownSide>
    </Container>
  );
};
