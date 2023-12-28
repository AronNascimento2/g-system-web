import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "../../../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../../../components/DynamicButton";
import { Container } from "./styles";

interface DateModalProps {
  show: boolean;
  handleDateSelected: (date: Date) => void;
  handleClosSelecteDate?: (() => void) | undefined;
}

const DateModal: React.FC<DateModalProps> = ({
  show,
  handleDateSelected,
  handleClosSelecteDate = () => {}, // Provide a default empty function
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleConfirmDate = () => {
    if (selectedDate) {
      handleDateSelected(selectedDate);
    }
  };
  console.log("aqui", selectedDate);

  return (
    <Container>
      <Modal show={show} handleClose={handleClosSelecteDate} height="450px">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>Selecione uma data</h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <input
              placeholder="Selecione uma data"
              type="text"
              value={
                selectedDate ? selectedDate.toLocaleDateString("pt-BR") : ""
              }
              readOnly // Make the input read-only to prevent direct editing
            />{" "}
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              showPopperArrow={false} // Hide the arrow indicating the date picker
              inline // Set the DatePicker to be always visible
            />
            <DynamicButton text="Buscar" onClick={handleConfirmDate} disabled={!selectedDate} />
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default DateModal;
