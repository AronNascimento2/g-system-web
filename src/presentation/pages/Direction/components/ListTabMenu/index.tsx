import {
  faArrowsRotate,
  faClock,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const ListTabMenu = () => {
  return (
    <Container>
      <DynamicButton text="Nova transação" icon={faArrowsRotate} />
      <DynamicButton text="Editar" icon={faScroll} />
      <DynamicButton text="Efetivar" icon={faClock} />
      <DynamicButton text="Excluir" icon={faClock} />
      <DynamicButton text="Info" icon={faClock} />
      <DynamicButton text="Histórico" icon={faClock} />
      <DynamicButton text="Transferência" icon={faClock} />
      <div className="select-container">
        <p>Receitas : R$ 0.00</p>
        <p>Despesas : R$ 2,931,65</p>
        <p>Balanço : R$ -2.931,65</p>
      </div>
    </Container>
  );
};
