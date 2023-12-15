import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalOptionsMobile } from "../ModalOptionsMobile";
import { Container } from "./styles";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FilterOptionsMobile } from "../FilterOptionsMobile";

type HeaderButtonsMobileProps = {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
};

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
      <button className="open-options-button" onClick={update}>
        <FontAwesomeIcon className="collapsed-icon" icon={faArrowsRotate} />
      </button>
      <input
        className="input-search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />
      <FilterOptionsMobile />
      <ModalOptionsMobile />
    </Container>
  );
};
