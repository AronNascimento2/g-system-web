export function getFirstAndLastDayOfMonth() {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
  
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;
  
      return `${year}-${formattedMonth}-${formattedDay}`;
    };
  
    return {
      firstDay: formatDate(firstDay),
      lastDay: formatDate(lastDay),
    };
  }
  
  // Exemplo de uso
  const { firstDay, lastDay } = getFirstAndLastDayOfMonth();
  
  console.log('Primeiro dia do mês:', firstDay); // Primeiro dia do mês: 2023-12-01 (exemplo)
  console.log('Último dia do mês:', lastDay); // Último dia do mês: 2023-12-31 (exemplo)
  