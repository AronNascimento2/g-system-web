import {
  faArrowsRotate,
  faClock,
  faEnvelope,
  faFilter,
  faPersonCirclePlus,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsPendencies = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <div className="select-container">
        <p>Área :</p>
        <select name="" id=""></select>
      </div>
      <div className="select-container">
        <p>Tipo :</p>
        <select name="" id=""></select>
      </div>

      <DynamicButton text="Alarmes" icon={faClock} />
      <DynamicButton text="Scripts" icon={faScroll} />
      <DynamicButton text="Cadastro de Cliente" icon={faPersonCirclePlus} />
      <DynamicButton text="Filtros" icon={faFilter} />
      <DynamicButton text="Envios" icon={faEnvelope} />
    </Container>
  );
};
