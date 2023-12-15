import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../services/Schedule";
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
import { CardMobile } from "./components/CardMobile";
import { useMediaQuery } from "react-responsive";
import { HeaderButtonsMobile } from "./components/HeaderButtonsMobile";

export const SchedulesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { firstDay, lastDay } = getFirstAndLastDayOfMonth();

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define o limite para dispositivos móveis

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

    openModal(<ContentModal details={details} />);
  };

  const tableColumns = [
    { title: "Código" },
    { title: "Cliente" },
    { title: "Data" },
    { title: "Serviço" },
    { title: "Periodo" },
    { title: "Técnico" },
    { title: "Ordem" },
    { title: "Endereço" },
  ];

  return (
    <Container>
      <ContainerButtons className="">
        {isMobile ? <HeaderButtonsMobile update={fetchData}/> : <HeaderButtons />}
      </ContainerButtons>
      {loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          {isMobile ? (
            <CardMobile appointments={appointments} />
          ) : (
            <WrapperTable>
              <ScheduleTable
                appointments={appointments}
                tableColumns={tableColumns}
                handleRowClick={handleRowClick}
              />
            </WrapperTable>
          )}
        </>
      )}
      {modalIsOpen && (
        <ModalBackground onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeButton" onClick={closeModal} tabIndex={0}>
              &times;
            </span>
            <div>{modalContent}</div>
          </div>
        </ModalBackground>
      )}
    </Container>
  );
};
