import React, { useState, useEffect } from "react";
import {  fetchAppointments } from "../../../services/Schedule";
import {
  Container,
  ContainerButtons,
  ModalBackground,
  WrapperTable,
} from "./styles";

import { BarLoader } from "react-spinners";
import { ContentModal } from "./components/ContentModal";
import { getFirstAndLastDayOfMonth } from "../../utils/getFirstAndLastDayofMonth";
import { HeaderButtons } from "./components/HeaderButtons";
import { AppointmentType } from "./types";
import { ScheduleTable } from "./components/ScheduleTable";


export const SchedulesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { firstDay, lastDay } = getFirstAndLastDayOfMonth();

  const fetchData = async () => {
    const startDate = firstDay;
    const endDate = lastDay;

    setLoading(true);
    try {
      const data = await fetchAppointments(startDate, endDate);
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os agendamentos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleRowClick = (rowData) => {
    const details = rowData; 

    openModal(
      <ContentModal details={details}/>
     
    );
  };
  
  const tableColumns = [
    { title: "Código" },
    { title: "Cliente" },
    { title: "Data" },
    { title: "Endereço" },
  ];


  return (
    <Container>
      <ContainerButtons className="">
      <HeaderButtons/>
      </ContainerButtons>
      {loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <WrapperTable>
         <ScheduleTable appointments={appointments} tableColumns={tableColumns} handleRowClick={handleRowClick} />
        </WrapperTable>
      )}
      {modalIsOpen && (
        <ModalBackground onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeButton" onClick={closeModal}>
              &times;
            </span>
            <div>{modalContent}</div>
          </div>
        </ModalBackground>
      )}
    </Container>
  );
};
