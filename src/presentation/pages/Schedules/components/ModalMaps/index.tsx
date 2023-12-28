import React, { useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../components/Modal";
import { DynamicButton } from "../../../../components/DynamicButton";
import Maps from "../../../../components/Maps";
import DateModal from "./components/dateModal";

interface Props {
  usuarios?;
}
export const ModalMaps: React.FC<Props> = ({ usuarios }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false); // Estado para o modal de data

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
const handleClosSelecteDate = ()=>{
  setIsDateModalOpen(false);

}
  return (
    <>
      <DynamicButton icon={faGlobe} text="Mapa de serviços" onClick={toggleDateModal} />
      <DateModal show={isDateModalOpen} handleDateSelected={handleDateSelected} handleClosSelecteDate={handleClosSelecteDate} /> {/* Modal de data */}
      <Modal show={isOpen} handleClose={toggleModal} width={'700px'}>
        <div>
          
          {usuarios?.map((user) => {
            return <p key={user.id}>{user.nome}</p>;
          })}
        </div>
        <div style={{ height: '300px' }}>
          <Maps usuarios={usuarios} />
        </div>
      </Modal>
    </>
  );
};
