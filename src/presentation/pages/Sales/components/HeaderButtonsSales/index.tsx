import { faArrowsRotate, faCar, faClock, faScroll } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsSales = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <div className="select-container">
        <p>Área :</p>
        <select name="" id=""></select>
      </div>
      <div className="input-radio">
        <input type="radio" />
        <p>Públicos</p>
      </div>
      <div className="input-radio">
        <input type="radio" />
        <p>Vinculados</p>
      </div>
      <DynamicButton text="Script de cobrança" icon={faScroll}/>
      <DynamicButton text="Alarmes" icon={faClock} />
      <DynamicButton text="Adicionar veículos" icon={faCar} />
      <div className="input-radio">
        <input type="radio" />
        <p>Ligações automaticas</p>
      </div>
    </Container>
  );
};
