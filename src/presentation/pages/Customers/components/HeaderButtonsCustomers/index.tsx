import {
  faArrowsRotate,
  faEnvelope,
  faFilter,
  faPersonCirclePlus,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsCustomers = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <DynamicButton text="Cadastro de clientes" icon={faScroll} />
      <DynamicButton
        text="Gerenciamento de contratos"
        icon={faPersonCirclePlus}
      />
      <DynamicButton text="Geração de Etiquetas/Envelopes" icon={faFilter} />
      <DynamicButton text="Envios(Todos os clientes)" icon={faEnvelope} />
    </Container>
  );
};
