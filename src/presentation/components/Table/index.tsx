import React from 'react';
import { StyledTable } from './styles';

interface Appointment {
  [key: string]: string | number | boolean; // Tipos genéricos para os dados dos agendamentos
}

interface TableProps {
  rows: Appointment[];
  columns: { key: string; title: string }[]; // Array de objetos representando as colunas da tabela
}

export const Table: React.FC<TableProps> = ({ rows, columns }) => {
    return (
      <StyledTable>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </StyledTable>
    );
  };

