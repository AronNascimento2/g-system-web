import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../services/Schedule";
import { Container, ContainerButtons, WrapperTable } from "./styles";

import { BarLoader } from "react-spinners";
import {  ContentModalTable } from "./components/ContentModalTable";
import { getFirstAndLastDayOfMonth } from "../../utils/getFirstAndLastDayofMonth";
import { HeaderButtons } from "./components/HeaderButtons";
import { AppointmentType } from "./types";
import { ScheduleTable } from "./components/ScheduleTable";
import { CardMobile } from "./components/CardMobile";
import { useMediaQuery } from "react-responsive";
import { HeaderButtonsMobile } from "./components/HeaderButtonsMobile";
import { SideModal } from "../../components/SideModal";

export const SchedulesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { firstDay, lastDay } = getFirstAndLastDayOfMonth();
  const [searchText, setSearchText] = useState("");

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

    openModal(<ContentModalTable details={details} />);
  };

  const handleRowClickCard = (rowData) => {
    const details = rowData;
    return details;
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

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <Container>
      <ContainerButtons className="">
        {isMobile ? (
          <HeaderButtonsMobile
            update={fetchData}
            onSearch={handleSearch}
            searchText={searchText}
          />
        ) : (
          <HeaderButtons
            update={fetchData}
            onSearch={handleSearch}
            searchText={searchText}
          />
        )}
      </ContainerButtons>

      {!loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <div className="overflow-items">
          {isMobile ? (
            <CardMobile
              appointments={appointments}
              searchText={searchText}
              handleRowClickCard={handleRowClickCard}
            />
          ) : (
            <WrapperTable>
              <ScheduleTable
                searchText={searchText}
                appointments={appointments}
                tableColumns={tableColumns}
                handleRowClick={handleRowClick}
              />
            </WrapperTable>
          )}
        </div>
      )}
      <SideModal show={modalIsOpen} handleClose={closeModal}>
        {modalContent}
      </SideModal>
    </Container>
  );
};
