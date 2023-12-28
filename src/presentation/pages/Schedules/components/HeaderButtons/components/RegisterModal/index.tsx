import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { Container } from "./styles";
import { AppointmentProps } from "../../../../types";



interface Props {
    details?: AppointmentProps;
  }
export const RegisterModal: React.FC<Props> = ({details}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
      <><DynamicButton icon={faEdit} text="Registrar" onClick={toggleModal}         disabled={!details?.Codigo}
      /><Container>

          <Modal show={isOpen} handleClose={toggleModal} title={"Registrar"}>
              <div style={{ paddingBottom: "10px" }}>
                  <p>Observação da ligação:</p>
                  <textarea name="" id=""></textarea>
              </div>

              <WrapperButton>
                  <DynamicButton text="Cancelar" onClick={toggleModal} width="100px"/>
                  <DynamicButton text="Salvar" onClick={toggleModal} width="100px" />
              </WrapperButton>
          </Modal>
      </Container></>
  );
};
