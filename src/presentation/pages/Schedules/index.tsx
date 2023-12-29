import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../services/Schedule";
import { Container, ContainerButtons, WrapperTable } from "./styles";
import { AppointmentType } from "./types";
import { CardMobile } from "./components/CardMobile";
import { useMediaQuery } from "react-responsive";
import { ReactTable } from "../../components/Table";
import { formatDate } from "../../utils/formateHourAndDate";
import { HeaderButtonsMobile } from "./components/HeaderButtonsMobile";
import DatePicker from "react-datepicker";

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
  const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);

  // Cálculo do último dia do mês
  const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    parseDateString(firstDate),
    parseDateString(lastDate),
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
    fetchData(startDate, endDate);
  }, [startDate, endDate]);

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
      {isMobile && (
        <ContainerButtons className="">
          <HeaderButtonsMobile
            update={() => fetchData(startDate, endDate)}
            onSearch={handleSearch}
            searchText={searchText}
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
        </ContainerButtons>
      )}

      <div className="overflow-items">
        {isMobile ? (
          <CardMobile
            searchText={searchText}
            loading={loading}
            appointments={appointments}
          />
        ) : (
          <WrapperTable>
            <ReactTable
              startDate={startDate}
              endDate={endDate}
              setDateRange={setDateRange}
              loading={loading}
              columns={columns}
              data={dataWithIds}
              handleRowClick={handleRowClick}
              fetchData={() => fetchData(startDate, endDate)}
              handleSearch={handleSearch}
              searchText={searchText}
              details={details}
            />
          </WrapperTable>
        )}
      </div>
    </Container>
  );
};
