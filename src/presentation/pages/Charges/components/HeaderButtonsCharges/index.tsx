import { faArrowsRotate, faClock, faScroll } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsCharges = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <DynamicButton text="Script de cobrança" icon={faScroll}/>
      <DynamicButton text="Alarmes" icon={faClock} />
      <div className="select-container">
        <p>Area :</p>
        <select name="" id=""></select>
      </div>
      <div className="input-radio">
        <input type="radio" />
        <p>Ligações automaticas</p>
      </div>
      <div></div>
    </Container>
  );
};
