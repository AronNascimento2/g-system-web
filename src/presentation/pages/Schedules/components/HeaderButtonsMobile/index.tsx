import { Container } from "./styles";
import { FilterOptionsMobile } from "../FilterOptionsMobile";
import { UpdateButton } from "../HeaderButtons/components/UpdateButton";

interface HeaderButtonsMobileProps  {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; 
}

export const HeaderButtonsMobile: React.FC<HeaderButtonsMobileProps> = ({
  update,
  onSearch,
  searchText,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearch(text); // Chama a função de busca com o texto atualizado
  };

  return (
    <Container>
      <UpdateButton update={update}/>
      <input
        className="input-search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />
      
      <FilterOptionsMobile />
    </Container>
  );
};
