import React, { useState } from "react";
import {  faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import Maps from "../../../../components/Maps";

interface Props {
  usuarios?
}
export const ModalMaps: React.FC<Props> = ({usuarios}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
console.log(usuarios);

  return (
    <>
      <DynamicButton
        icon={faGlobe}
        text="Mapa de serviços"
        onClick={toggleModal}
      />
        <Modal show={isOpen} handleClose={toggleModal} width={'700px'}>
          <div>
           {usuarios?.map((user)=>{
            return <><p>{user.nome}</p></>
           })}
          </div>
       <div style={{height:'500px', }}>
       <Maps usuarios={usuarios} />
       </div>
        </Modal>
    </>
  );
};
