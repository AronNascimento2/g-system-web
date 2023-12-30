import {
  faArrowsRotate,
  faClock,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsDirection = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <DynamicButton text="Gerenciar caixa" icon={faScroll} />
      <DynamicButton text="Opções de visualização" icon={faClock} />
      <div className="select-container">
        <p>Caixa :</p>
        <select name="" id=""></select>
      </div>
    </Container>
  );
};
