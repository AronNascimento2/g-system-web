import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { WrapperButton } from "../../../../components/WrapperButton/styles";
import { Container } from "./styles";

export const RegisterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
      <><DynamicButton icon={faEdit} text="Registrar" onClick={toggleModal} /><Container>

          <Modal show={isOpen} handleClose={toggleModal} title={"Registrar"}>
              <div style={{ paddingBottom: "10px" }}>
                  <p>Observação da ligação:</p>
                  <textarea name="" id="" cols="42" rows="5"></textarea>
              </div>

              <WrapperButton>
                  <DynamicButton text="Cancelar" onClick={toggleModal} />
                  <DynamicButton text="Salvar" onClick={toggleModal} />
              </WrapperButton>
          </Modal>
      </Container></>
  );
};