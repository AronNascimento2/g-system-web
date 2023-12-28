import { faArrowsRotate, faFile } from "@fortawesome/free-solid-svg-icons";
import { FilterOptions } from "../FilterOptions";
import { Container } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import React from "react";
import { RegisterModal } from "./components/RegisterModal";
import { InvoiceModal } from "../InvoiceModal";
import { ConfirmModal } from "./components/ConfirmModal";
import { CancelScheduleModal } from "./components/CancelScheduleModal";
import { EditModal } from "./components/EditModal";
import { AppointmentProps } from "../../types";
import { ModalMaps } from "./components/ModalMaps";
import { ExcludeModal } from "./components/ExcludeModal";

interface HeaderButtonsProps {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
  details: AppointmentProps;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  update,
  onSearch,
  searchText,
  details,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearch(text); // Chama a função de busca com o texto atualizado
  };

  const buttonsData = [
    {
      icon: faFile,
      text: "Documentos",
      onClick: () => console.log("Botão Confirmar clicado"),
    },
  ];



  return (
    <Container>
      <DynamicButton
        onClick={update}
        icon={faArrowsRotate}
        text="Atualizar"
        width="100px"
      />
      <input
        className="input-search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />

      {buttonsData.map((button, index) => (
        <DynamicButton
          key={index}
          icon={button?.icon}
          text={button.text}
          onClick={button.onClick}
          disabled
        />
      ))}
      <ExcludeModal details={details} />
      <CancelScheduleModal details={details} />
      <EditModal details={details} />
      <ConfirmModal details={details} />
      <InvoiceModal details={details} />
      <RegisterModal details={details} />
      <ModalMaps  />
      <FilterOptions />
    </Container>
  );
};
