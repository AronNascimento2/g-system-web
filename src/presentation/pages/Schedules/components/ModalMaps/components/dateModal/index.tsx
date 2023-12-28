import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";

interface DateModalProps {
  show: boolean;
  handleDateSelected: (date: Date) => void;
  handleClosSelecteDate?: () => void;
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
  console.log(show);

  return (
    <Modal show={show} handleClose={handleClosSelecteDate} height="450px">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2>Selecione uma data</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
          <DynamicButton text="Confirmar" onClick={handleConfirmDate} />
        </div>
      </div>
    </Modal>
  );
};

export default DateModal;
