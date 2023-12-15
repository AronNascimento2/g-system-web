import { useState } from "react";
import {
  faEllipsisVertical,
  faCheck,
  faEdit,
  faClose,
  faDollar,
  faTrash,
  faGlobe,
  faFile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ModalContainer, ModalContent } from "./styles";
import { DynamicButton } from "../button";

export const ModalOptionsMobile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const buttonsData = [
    {
      icon: faCheck,
      text: "Confirmar",
      onClick: () => console.log("Botão Confirmar clicado"),
    },
    {
      icon: faDollar,
      text: "Faturar",
      onClick: () => console.log("Botão Faturar clicado"),
    },
    {
      icon: faEdit,
      text: "Editar",
      onClick: () => console.log("Botão Editar clicado"),
    },
    {
      icon: faTrash,
      text: "Excluir",
      onClick: () => console.log("Botão Excluir clicado"),
    },

    {
      icon: faClose,
      text: "Cancelar",
      onClick: () => console.log("Botão Cancelar clicado"),
    },
    {
      icon: faGlobe,
      text: "Mapa de Serviços",
      onClick: () => console.log("Botão Mapa de Serviços clicado"),
    },

    {
      icon: faEdit,
      text: "Registrar",
      onClick: () => console.log("Botão Registrar clicado"),
    },

    {
      icon: faFile,
      text: "Documentos",
      onClick: () => console.log("Botão Documentos clicado"),
    },
    {
      icon: faEnvelope,
      text: "Enviar",
      onClick: () => console.log("Botão Enviar clicado"),
    },
  ];

  return (
    <Container>
      <button className="open-options-button" onClick={toggleModal}>
        <FontAwesomeIcon className="collapsed-icon" icon={faEllipsisVertical} />
      </button>

      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <span className="closeButton" onClick={toggleModal} tabIndex={0}>
            &times;
          </span>
          <div>
            {buttonsData.map((button, index) => (
              <DynamicButton
                key={index}
                icon={button.icon}
                text={button.text}
                onClick={button.onClick}
              />
            ))}
          </div>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
};
