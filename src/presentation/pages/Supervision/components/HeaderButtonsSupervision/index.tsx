import {
  faArrowsRotate,
  faCheck,
  faClock,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsSupervision = () => {
  return (
    <Container>
      <div className="select-container">
        <select name="" id=""></select>
        <select name="" id=""></select>
      </div>
      <DynamicButton text="Carregar" icon={faArrowsRotate} />
      <DynamicButton text="Confirmar" icon={faCheck} />
      <DynamicButton text="Visualizar" icon={faClock} />
      <DynamicButton text="Outras opções" icon={faArrowsRotate} />
      <DynamicButton text="Registrar" icon={faScroll} />
      <div className="input-radio">
        <input type="radio" />
        <p>Reajuste</p>
      </div>
      <div className="input-radio">
        <input type="radio" />
        <p>Rota</p>
      </div>
      <DynamicButton text="Opções p/ serviços" icon={faClock} />
      <div className="values">
        <p>Total: 0 (R$ 0.00)</p>
        <p>Pendentes: 0 (R$ 0.00)</p>
        <p>Realizados: 0 (R$ 0.00)</p>
      </div>
    </Container>
  );
};
