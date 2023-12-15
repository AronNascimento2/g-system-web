import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalOptionsMobile } from "../ModalOptionsMobile";
import { Container } from "./styles";
import { faArrowsRotate, faFilter } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";

export const HeaderButtonsMobile = ({update}) => {
  return (
    <Container>
      <button className="open-options-button" onClick={update}>
        <FontAwesomeIcon className="collapsed-icon" icon={faArrowsRotate} />
      </button>
      <input className="input-search" type="text" placeholder="Buscar" />
      <DynamicButton className='button' icon={faFilter} text={'Filtrar'}/>
      <ModalOptionsMobile />
    </Container>
  );
};
