import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../services/Schedule";
import { Container, ContainerButtons, WrapperTable } from "./styles";
import { ContentModalTable } from "./components/ContentModalTable";
import { getFirstAndLastDayOfMonth } from "../../utils/getFirstAndLastDayofMonth";
import { AppointmentType } from "./types";
import { CardMobile } from "./components/CardMobile";
import { useMediaQuery } from "react-responsive";
import { SideModal } from "../../components/SideModal";
import { ReactTable } from "../../components/Table";
import { formatDate } from "../../utils/formateHourAndDate";
import { HeaderButtonsMobile } from "./components/HeaderButtonsMobile";

export const SchedulesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { firstDay, lastDay } = getFirstAndLastDayOfMonth();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };
  const isMobile = useMediaQuery({ maxWidth: 1080 }); // Define o limite para dispositivos móveis

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
  const dataWithIds = appointments.map((appointment) => ({
    ...appointment,

    Data: formatDate(appointment.Data),
  }));

  const columns = [
    { Header: "Código", accessor: "Codigo" },
    { Header: "Cliente", accessor: "Cliente" },
    { Header: "Data", accessor: "Data" },
    { Header: "Serviço", accessor: "Servico" },
    { Header: "Período", accessor: "Periodo" },
    { Header: "Técnico", accessor: "Tecnico" },
    { Header: "Ordem", accessor: "Ordem" },
    { Header: "Endereço", accessor: "Endereco" },
  ];

  return (
    <Container>
      {isMobile && (
        <ContainerButtons className="">
          <HeaderButtonsMobile
            update={fetchData}
            onSearch={handleSearch}
            searchText={searchText}
          />
        </ContainerButtons>
      )}

      <div className="overflow-items">
        {isMobile ? (
          <CardMobile
            searchText={searchText}
            loading={loading}
            appointments={appointments}
            handleRowClickCard={handleRowClickCard}
          />
        ) : (
          <WrapperTable>
            <ReactTable
              loading={loading}
              columns={columns}
              data={dataWithIds}
              handleRowClick={handleRowClick}
              fetchData={fetchData}
              handleSearch={handleSearch}
              searchText={searchText}
            />
          </WrapperTable>
        )}
      </div>

      <SideModal show={modalIsOpen} handleClose={closeModal}>
        {modalContent}
      </SideModal>
    </Container>
  );
};
