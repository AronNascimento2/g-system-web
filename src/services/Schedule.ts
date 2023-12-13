// appointmentService.ts

export interface Appointment {
    Codigo: number;
    Cliente: string;
    // ... outros campos
  }
  
  export const fetchAppointments = async (startDate: string, endDate: string): Promise<Appointment[]> => {
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
    return data as Appointment[];
  };
  