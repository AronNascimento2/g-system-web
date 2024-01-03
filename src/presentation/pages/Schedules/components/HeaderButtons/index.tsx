import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
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
import { DocumentsButton } from "./components/DocumentsButton";
import DatePicker from "react-datepicker";
import { AttachmentsModal } from "./components/AttachmentsModal";

interface HeaderButtonsProps {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
  details: AppointmentProps;
  startDate;
  endDate;

  handleDateChange;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  update,
  onSearch,
  searchText,
  details,
  startDate,
  endDate,
  handleDateChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearch(text); // Chama a função de busca com o texto atualizado
  };

  return (
    <Container>
      <DynamicButton
        onClick={update}
        icon={faArrowsRotate}
        text="Atualizar"
        width="120px"
      />
      <input
        className="input-search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />
      <DatePicker
        className="datepicker"
        dateFormat="dd/MM/yyyy"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          handleDateChange(update as [Date | null, Date | null]);
        }}
        isClearable={true}
      />

      <DocumentsButton />
      <ExcludeModal details={details} />
      <CancelScheduleModal details={details} />
      <EditModal details={details} />
      <ConfirmModal details={details} />
      <InvoiceModal details={details} />
      <RegisterModal details={details} />
      <ModalMaps  />
      <AttachmentsModal details={details} update={update} />
      <FilterOptions />
    </Container>
  );
};
