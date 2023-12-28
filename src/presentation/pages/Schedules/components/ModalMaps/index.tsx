import React, { useState } from "react";
import {  faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import { AppointmentProps } from "../../types";
import Maps from "../../../../components/Maps";

interface Props {
  details?: AppointmentProps;
}
export const ModalMaps: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DynamicButton
        icon={faGlobe}
        text="Mapa de serviços"
        onClick={toggleModal}
      />
        <Modal show={isOpen} handleClose={toggleModal} width={'700px'}>
       <div style={{height:'500px', }}>
       <Maps />
       </div>
        </Modal>
    </>
  );
};
