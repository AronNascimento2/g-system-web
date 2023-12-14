// appointmentService.ts

export type AppointmentType = {
  Data: string;
  Cliente: string;
  Codigo: string;
  Tecnico?: string;
  DataCriacao?: string;
  Observacao?: string;
  NãoPresencial?: string | boolean;
  StatusFaturamento?: string;
  Veiculos?: { Status: string };
  Km?: number;
  Ordem?: number;
  ValorServico?: number;
  Verificado?: string | boolean;
  VisitaTecnica?: string | boolean;
  ClienteAntigo?: string;
  CustoDeslocamento?: number;
  Servico?: string;
  Endereco: string;
  Tipo?: string;
  Custos?: number;
  Periodo?: string;
  ValorAdicional?: number;
}


  
  export const fetchAppointments = async (startDate: string, endDate: string): Promise<AppointmentType[]> => {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
  
    const response = await fetch(`https://api.gsystem.com.br/api/Agendamentos?Data[Inicial]=${startDate}&Data[Final]=${endDate}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho de autorização
      },
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar os agendamentos');
    }
  
    const data = await response.json();
    return data as AppointmentType[];
  };
  