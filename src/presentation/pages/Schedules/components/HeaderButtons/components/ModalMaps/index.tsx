import React, { useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { Modal } from "../../../../../../components/Modal";
import Maps from "../../../../../../components/Maps";
import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { users } from "./usertest";

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

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handlePositionChange = (direction: "up" | "down") => {
    if (selectedUserIndex !== null) {
      const updatedUsuarios = [...usuarios];
      const newIndex =
        direction === "up" ? selectedUserIndex - 1 : selectedUserIndex + 1;

      if (direction === "up" && selectedUserIndex > 0) {
        const usuarioToMove = updatedUsuarios[selectedUserIndex];
        updatedUsuarios[selectedUserIndex] = updatedUsuarios[newIndex];
        updatedUsuarios[newIndex] = usuarioToMove;

        // Atualiza as labels conforme a nova ordem
        updatedUsuarios.forEach((usuario, index) => {
          usuario.label = `${index + 1}`;
        });

        setUsuarios(updatedUsuarios);
        setSelectedUserIndex(newIndex);
      } else if (
        direction === "down" &&
        selectedUserIndex < updatedUsuarios.length - 1
      ) {
        const usuarioToMove = updatedUsuarios[selectedUserIndex];
        updatedUsuarios[selectedUserIndex] = updatedUsuarios[newIndex];
        updatedUsuarios[newIndex] = usuarioToMove;

        // Atualiza as labels conforme a nova ordem
        updatedUsuarios.forEach((usuario, index) => {
          usuario.label = `${index + 1}`;
        });

        setUsuarios(updatedUsuarios);
        setSelectedUserIndex(newIndex);
      }
    }
  };

  const canMoveUp = selectedUserIndex !== null && selectedUserIndex > 0;
  const canMoveDown =
    selectedUserIndex !== null && selectedUserIndex < usuarios.length - 1;

  return (
    <Container>
      <DynamicButton
        icon={faGlobe}
        text="Mapa de serviços"
        onClick={toggleModal}
      />
      <Modal show={isOpen} handleClose={toggleModal} width={"700px"}>
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
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
            <button
              className="button-sort"
              onClick={() => handlePositionChange("down")}
              disabled={!canMoveDown}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
        </div>
        <div className="container-map">
          <Maps usuarios={usuarios} />
        </div>
      </Modal>
    </Container>
  );
};
