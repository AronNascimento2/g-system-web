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
};

