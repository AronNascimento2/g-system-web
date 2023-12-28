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

  const usuarios = [
    {label:'1', nome: "Cliente 1", latitude: -23.55675234096567, longitude: -46.40948836105995 },
    {label:'2',  nome: "Cliente 2", latitude: -23.527632661978437, longitude: -46.7758956168826 },
    {label:'3',  nome: "Cliente 3", latitude: -23.521082688335113, longitude: -46.19686731075785 },
  ];

  return (
    <Container>
      <button className="open-options-button" onClick={toggleModal}>
        <FontAwesomeIcon className="collapsed-icon" icon={faEllipsisVertical} />
      </button>

      <ModalMobileDownSide show={isOpen} handleClose={toggleModal}>
        <div className="buttons-wrapper">
         
          <InvoiceModal />
          <ModalMaps usuarios={usuarios}/>
          <RegisterModal />
        </div>
      </ModalMobileDownSide>
    </Container>
  );
};
