import { formatDate } from "../../../../utils/formateHourAndDate";
import { Container, DetailsContent, WrapperContent } from "./styles";

export const CardMobile = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment) => {
        return (
          <Container key={appointment.Codigo}>
            <WrapperContent>
              <div className="name-client">
                <p className="name">{appointment.Cliente}</p>
                <span className="code">{appointment.Codigo}</span>
              </div>
              <DetailsContent>
                <div className="content">
                  <div ><p className="title">Serviço</p> <p className="info">{appointment.Servico}</p></div>
                  <div ><p className="title">Data</p><p className="info">{formatDate(appointment.Data)}</p></div>
                  <div ><p className="title">Período</p><p className="info">{appointment.Periodo}</p></div>
                </div>
                <div className="content">
                  <div ><p className="title">Técnico</p> <p className="info">{appointment.Tecnico}</p></div>
                  <div ><p className="title">Ordem</p><p className="info">{appointment.Ordem}</p></div>
                  <div ><p className="title">Endereço</p><p className="info">{appointment.Endereco}</p></div>
                </div>
               
              </DetailsContent>
            </WrapperContent>
          </Container>
        );
      })}
    </>
  );
};
