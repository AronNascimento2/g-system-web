import { useState } from "react";
import {
  faEllipsisVertical,
  faEdit,
  faGlobe,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ModalContainer, ModalContent } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
export const ModalOptionsMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const buttonsData = [
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
