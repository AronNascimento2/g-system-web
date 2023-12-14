export type AppointmentType = {
    Data:string,
    Cliente: string;
    Codigo: string;
    Tecnico?: string; // O campo é opcional, já que não está presente na lista
    DataCriacao?: string; // O campo é opcional, já que não está presente na lista
    Observacao?: string; // O campo é opcional, já que não está presente na lista
    NãoPresencial?: string | boolean; // O campo pode ser uma string ou boolean, baseado na lista
    StatusFaturamento?: string; // O campo é opcional, já que não está presente na lista
    Veiculos?: { Status: string }; // O campo Veiculos é um objeto com a propriedade Status
    Km?: number; // O campo é numérico, portanto, pode ser number
    Ordem?: number; // O campo é numérico, portanto, pode ser number
    ValorServico?: number; // O campo é numérico, portanto, pode ser number
    Verificado?: string | boolean; // O campo pode ser uma string ou boolean, baseado na lista
    VisitaTecnica?: string | boolean; // O campo pode ser uma string ou boolean, baseado na lista
    ClienteAntigo?: string; // O campo é opcional, já que não está presente na lista
    CustoDeslocamento?: number; // O campo é numérico, portanto, pode ser number
    Servico?: string; // O campo é opcional, já que não está presente na lista
    Endereco: string;
    Tipo?: string; // O campo é opcional, já que não está presente na lista
    Custos?: number; // O campo é numérico, portanto, pode ser number
    Periodo?: string; // O campo é opcional, já que não está presente na lista
    ValorAdicional?: number; // O campo é numérico, portanto, pode ser number
  };