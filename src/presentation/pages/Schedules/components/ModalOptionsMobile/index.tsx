import React, { useState } from "react";
import {
  faEllipsisVertical,
  faGlobe,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";
import { RegisterModal } from "../RegisterModal";
import { InvoiceModal } from "../InvoiceModal";
import { ModalMaps } from "../ModalMaps";

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

      <ModalMobileDownSide show={isOpen} handleClose={toggleModal}>
        <div className="buttons">
         
          <InvoiceModal />
          <ModalMaps />
          <RegisterModal />
        </div>
      </ModalMobileDownSide>
    </Container>
  );
};
