import { formatDate } from "../../../../utils/formateHourAndDate";
import { ScheduleTableContainer } from "./styles";

export const ScheduleTable = ({
  tableColumns,
  appointments,
  handleRowClick,
  searchText,
}) => {
  const filteredAppointments = appointments?.filter((appointment) =>
    appointment.Cliente.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <ScheduleTableContainer>
      <table>
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAppointments?.map((appointment, index) => (
            <tr key={index} onClick={() => handleRowClick(appointment)}>
              <td>{appointment.Codigo}</td>
              <td>{appointment.Cliente}</td>
              <td>{formatDate(appointment.Data)}</td>
              <td>{appointment.Servico}</td>
              <td>{appointment.Periodo}</td>
              <td>{appointment.Tecnico}</td>
              <td>{appointment.Ordem}</td>
              <td>{appointment.Endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScheduleTableContainer>
  );
};
