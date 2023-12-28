import {
  faArrowsRotate,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FilterOptions } from "../FilterOptions";
import { Container } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";
import React from "react";
import { RegisterModal } from "../RegisterModal";
import { InvoiceModal } from "../InvoiceModal";
import { ConfirmModal } from "../ConfirmModal";
import { ExcludeModal } from "../ExcludeModal";
import { CancelScheduleModal } from "../CancelScheduleModal";
import { EditModal } from "../EditModal";
import { AppointmentProps } from "../../types";
import { ModalMaps } from "../ModalMaps";

interface HeaderButtonsProps {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
  details:AppointmentProps
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

  const usuarios = [
    {label:'1', nome: "Cliente 1", latitude: -23.55675234096567, longitude: -46.40948836105995 },
    {label:'2',  nome: "Cliente 2", latitude: -23.527632661978437, longitude: -46.7758956168826 },
    {label:'3',  nome: "Cliente 3", latitude: -23.521082688335113, longitude: -46.19686731075785 },
  ];

  return (
    <Container>
      <DynamicButton onClick={update} icon={faArrowsRotate} text="Atualizar" />
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
      <ExcludeModal details={details}/>
      <CancelScheduleModal details={details}/>
      <EditModal details={details}/>
      <ConfirmModal details={details}/>
      <InvoiceModal details={details}/>
      <RegisterModal details={details}/>
      <ModalMaps usuarios={usuarios}/>
      <FilterOptions />
    </Container>
  );
};
