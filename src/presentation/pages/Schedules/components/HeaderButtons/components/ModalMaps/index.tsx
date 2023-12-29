import React, { useState } from "react";
import {
  faArrowDown,
  faArrowUp,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { Modal } from "../../../../../../components/Modal";
import Maps from "../../../../../../components/Maps";
import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { users } from "./usertest";
import DateModal from "./components/dateModal";

interface Usuario {
  nome: string;
  latitude: number;
  longitude: number;
  label: string;
}

interface Props {
  usuarios?: Usuario[];
}

export const ModalMaps: React.FC<Props> = () => {
  const user = users;
  const [isOpen, setIsOpen] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>(user || []);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  );

  const [isDateModalOpen, setIsDateModalOpen] = useState(false); // Estado para o modal de data

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  const handleDateSelected = (selectedDate) => {
    // Aqui você pode manipular a data selecionada, como fazer a busca com base nela
    // Por exemplo, chamar uma função que busca os usuários com a data selecionada
    // e, em seguida, abrir o modal do mapa com os resultados
    console.log("Data selecionada:", selectedDate);

    // Por enquanto, vou apenas abrir o modal do mapa após selecionar a data
    setIsDateModalOpen(false);
    setIsOpen(true);
  };
  const handleClosSelecteDate = () => {
    setIsDateModalOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handlePositionChange = (direction: "up" | "down") => {
    if (selectedUserIndex !== null) {
      const updatedUsuarios = [...usuarios];
      const newIndex =
        direction === "up" ? selectedUserIndex - 1 : selectedUserIndex + 1;

      if (
        (direction === "up" && selectedUserIndex > 0) ||
        (direction === "down" && selectedUserIndex < updatedUsuarios.length - 1)
      ) {
        const usuarioToMove = updatedUsuarios[selectedUserIndex];
        updatedUsuarios[selectedUserIndex] = updatedUsuarios[newIndex];
        updatedUsuarios[newIndex] = usuarioToMove;

        // Function to update labels
        const updateLabels = (users) => {
          users.forEach((usuario, index) => {
            usuario.label = `${index + 1}`;
          });
        };

        updateLabels(updatedUsuarios);

        setUsuarios(updatedUsuarios);
        setSelectedUserIndex(newIndex);
      }
    }
  };

  const canMoveUp = selectedUserIndex !== null && selectedUserIndex > 0;
  const canMoveDown =
    selectedUserIndex !== null && selectedUserIndex < usuarios.length - 1;

  return (
    <>
      <DynamicButton
        icon={faGlobe}
        text="Mapa de serviços"
        onClick={toggleDateModal}
        width="120px"

      />
      <Container>
        <DateModal
          show={isDateModalOpen}
          handleDateSelected={handleDateSelected}
          handleClosSelecteDate={handleClosSelecteDate}
        />{" "}
        <Modal
          show={isOpen}
          handleClose={toggleModal}
          className="map-services-modal"
          top="120%"

        >
          <div className="client-names">
            <ol>
              {usuarios.map((user, index) => (
                <li
                  key={index}
                  className={selectedUserIndex === index ? "selected" : ""}
                >
                  <p onClick={() => setSelectedUserIndex(index)}>{user.nome}</p>
                </li>
              ))}
            </ol>
            <div className="buttons-list">
              <button
                className="button-sort"
                onClick={() => handlePositionChange("up")}
                disabled={!canMoveUp}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button
                className="button-sort"
                onClick={() => handlePositionChange("down")}
                disabled={!canMoveDown}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
          <div className="container-map">
            <Maps usuarios={usuarios} />
          </div>
        </Modal>
      </Container>
    </>
  );
};
