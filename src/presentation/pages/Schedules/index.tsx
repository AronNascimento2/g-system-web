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
  // Adicione este estado ao componente SchedulesPage
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
  // Adicione esta função ao componente SchedulesPage
  const handleSearch = (text) => {
    setSearchText(text); // Atualiza o estado com o texto de busca
    // Execute a lógica de filtragem dos usuários com base no texto
    // Aqui você pode usar o estado 'text' para filtrar 'appointments'
    // Exemplo:
    // const filteredAppointments = appointments.filter((appointment) =>
    //   appointment.client.toLowerCase().includes(text.toLowerCase())
    // );
    // setAppointments(filteredAppointments); // Atualiza a lista de usuários filtrados
  };

  return (
    <Container>
      <ContainerButtons className="">
        {isMobile ? (
          <HeaderButtonsMobile update={fetchData} onSearch={handleSearch} searchText={searchText} />
        ) : (
          <HeaderButtons />
        )}
      </ContainerButtons>

      {loading ? (
        <div className="loader-container">
          <BarLoader width={300} height={10} color="#3498db" />
          <p>Carregando...</p>
        </div>
      ) : (
        <div className="overflow-items">
          {isMobile ? (
            // Dentro do bloco onde você renderiza o CardMobile
            <CardMobile appointments={appointments} searchText={searchText} />
          ) : (
            <WrapperTable>
              <ScheduleTable
                appointments={appointments}
                tableColumns={tableColumns}
                handleRowClick={handleRowClick}
              />
            </WrapperTable>
          )}
        </div>
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
