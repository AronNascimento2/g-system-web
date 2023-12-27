import React, { useState } from "react";
import {
  faEllipsisVertical,
  faEdit,
  faGlobe,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import { ModalMobileDownSide } from "../../../../components/ModalMobileDownSide";
import { RegisterModal } from "../RegisterModal";
import { InvoiceModal } from "../InvoiceModal";

export const ModalOptionsMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const buttonsData = [
    {
      icon: faGlobe,
      text: "Mapa de Serviços",
      onClick: () => console.log("Botão Mapa de Serviços clicado"),
      disabled: true,
    },

    {
      icon: faFile,
      text: "Documentos",
      onClick: () => console.log("Botão Documentos clicado"),
      disabled: true,
    },
  ];

  return (
    <Container>
      <button className="open-options-button" onClick={toggleModal}>
        <FontAwesomeIcon className="collapsed-icon" icon={faEllipsisVertical} />
      </button>

      <ModalMobileDownSide show={isOpen} handleClose={toggleModal}>
        <div className="buttons">
          {buttonsData.map((button, index) => (
            <DynamicButton
              key={index}
              icon={button.icon}
              text={button.text}
              onClick={button.onClick}
              disabled={button.disabled}
            />
          ))}
          <InvoiceModal />

          <RegisterModal />
        </div>
      </ModalMobileDownSide>
    </Container>
  );
};
