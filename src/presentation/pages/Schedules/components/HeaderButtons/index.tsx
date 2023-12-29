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
import { DocumentsButton } from "./components/DocumentsButton";
import DatePicker from "react-datepicker";

interface HeaderButtonsProps {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
  details: AppointmentProps;
  startDate;
  endDate;
  setDateRange;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  update,
  onSearch,
  searchText,
  details,
  startDate,
  endDate,
  setDateRange,
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
          setDateRange(update as [Date | null, Date | null]);
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
      <ModalMaps />
      <FilterOptions />
    </Container>
  );
};
