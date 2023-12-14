export function formatDate(data) {
  const partes = data.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

export function formatDateAndHour(data) {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
  const ano = dataObj.getFullYear();
  const hora = dataObj.getHours().toString().padStart(2, "0");
  const minuto = dataObj.getMinutes().toString().padStart(2, "0");

  return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
}

// Exemplo de uso
// formatDate("2023-12-01") -> 01/12/2023;
// formatDate("2023-11-23T17:52:02.18") -> 23/11/2023 às 17:52;


