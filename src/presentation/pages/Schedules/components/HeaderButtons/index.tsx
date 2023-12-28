import {
  faArrowsRotate,
  faFile,
  faGlobe,
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
import { AppointmentType } from "../../types";

interface HeaderButtonsProps {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
  details:AppointmentType
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
    {
      icon: faGlobe,
      text: "Mapa de Serviços",
      onClick: () => console.log("Botão Faturar clicado"),
    },
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
      <FilterOptions />
    </Container>
  );
};
