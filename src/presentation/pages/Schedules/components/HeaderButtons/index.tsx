import {
  faArrowsRotate,
  faEdit,
  faFile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FilterOptions } from "../FilterOptions";
import { Container } from "./styles";
import { DynamicButton } from "../../../../components/DynamicButton";

type HeaderButtonsProps = {
  update: () => void;
  onSearch: (text: string) => void;
  searchText: string; // Definindo searchText como uma string
};

export const HeaderButtons = ({
  update,
  onSearch,
  searchText,
}: HeaderButtonsProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearch(text); // Chama a função de busca com o texto atualizado
  };

  const buttonsData = [
    {
      icon: faFile,
      text: "Documentos",
      onClick: () => console.log("Botão Confirmar clicado"),
    },
    {
      icon: faGlobe,
      text: "Mapa de Serviços",
      onClick: () => console.log("Botão Faturar clicado"),
    },
    {
      icon: faEdit,
      text: "Registrar",
      onClick: () => console.log("Botão Editar clicado"),
    },
  ];

  return (
    <Container>
      <DynamicButton
        onClick={update}
        icon={faArrowsRotate}
        text="Atualizar"
      />
      <input
        className="input-search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />

      {buttonsData.map((button, index) => (
        <DynamicButton
          key={index}
          icon={button.icon}
          text={button.text}
          onClick={button.onClick}
          disabled
        />
      ))}
      <FilterOptions />
    </Container>
  );
};
