import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../services/Schedule";
import { Container, WrapperTable } from "./styles";
import { AppointmentType } from "./types";
import { CardMobile } from "./components/CardMobile";
import { useMediaQuery } from "react-responsive";
import { ReactTable } from "../../components/Table";
import { formatDate } from "../../utils/formateHourAndDate";

const parseDateString = (dateString) => {
  return dateString ? new Date(dateString) : null;
};

const formatDateToYYYYMMDD = (date) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const SchedulesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentType>([]);
  const [searchText, setSearchText] = useState("");
  const [details, setDetails] = useState(null);

  const today = new Date();
  const firstDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const lastDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 30
  );

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    parseDateString(lastDate), // Setting lastDate as startDate
    parseDateString(firstDate), // Setting firstDate as endDate
  ]);

  const [startDate, endDate] = dateRange;

  const fetchData = async (start, end) => {
    setLoading(true);
    try {
      const formattedStartDate = formatDateToYYYYMMDD(start);
      const formattedEndDate = formatDateToYYYYMMDD(end);

      const data = await fetchAppointments(
        formattedStartDate,
        formattedEndDate
      );
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os agendamentos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endDate) {
      fetchData(startDate, endDate);
    }
  }, [startDate, endDate]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleRowClick = (rowData: any) => {
    setDetails(rowData);
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

  const isMobile = useMediaQuery({ maxWidth: 1080 });

  return (
    <Container>
      {isMobile ? (
        <CardMobile
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
          fetchData={() => fetchData(startDate, endDate)}
          handleSearch={handleSearch}
          searchText={searchText}
          loading={loading}
          appointments={appointments}
        />
      ) : (
        <WrapperTable>
          <ReactTable
            fetchData={fetchData}
            startDate={startDate}
            endDate={endDate}
            loading={loading}
            columns={columns}
            data={dataWithIds}
            handleRowClick={handleRowClick}
            handleDateChange={handleDateChange} // Adicionando o manipulador de alteração de data
            handleSearch={handleSearch}
            searchText={searchText}
            details={details}
          />
        </WrapperTable>
      )}
    </Container>
  );
};
