import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "../../../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../../../components/DynamicButton";
import { Container } from "./styles";
import { fetchAppointments } from "../../../../../../../../../services/Schedule";
import { AppointmentType } from "../../../../../../types";

const formatDateToYYYYMMDD = (date) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

interface DateModalProps {
  show: boolean;
  handleDateSelected: (date: Date) => void;
  handleClosSelecteDate: (() => void) | undefined;
}

const DateModal: React.FC<DateModalProps> = ({
  show,
  handleDateSelected,
  handleClosSelecteDate = () => {},
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [appointments, setAppointments] = useState<AppointmentType>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleConfirmDate = async () => {
    setError(null);
    if (selectedDate) {
      try {
        const data = await fetchData(selectedDate, selectedDate);
        setAppointments(data);
        handleDateSelected(selectedDate);
      } catch (error) {
        setError("Erro ao buscar os agendamentos.");
      }
    }
  };

  const handleReloadComponent = () => {
    setSelectedDate(null);
    setAppointments([]);
    setError(null);
  };

  const fetchData = async (start: Date, end: Date) => {
    try {
      const formattedStartDate = formatDateToYYYYMMDD(start);
      const formattedEndDate = formatDateToYYYYMMDD(end);

      const data = await fetchAppointments(
        formattedStartDate,
        formattedEndDate
      );
      return data;
    } catch (error) {
      throw new Error("Erro ao buscar os agendamentos.");
    }
  };

  return (
    <Container>
      <Modal
        show={show}
        handleClose={handleClosSelecteDate}
        className="select-date-modal"
        top="180%"
      >
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
            {error ? (
              <div>
                <p>{error}</p>
                <DynamicButton
                  text="Nova busca"
                  onClick={handleReloadComponent}
                  width="200px"
                />
              </div>
            ) : (
              <>
                <input
                  placeholder="Selecione uma data"
                  type="text"
                  value={
                    selectedDate ? selectedDate.toLocaleDateString("pt-BR") : ""
                  }
                  readOnly
                />
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  showPopperArrow={false}
                  inline
                />
                <DynamicButton
                  text="Buscar"
                  onClick={handleConfirmDate}
                  disabled={!selectedDate}
                  width="200px"
                />
              </>
            )}
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default DateModal;
