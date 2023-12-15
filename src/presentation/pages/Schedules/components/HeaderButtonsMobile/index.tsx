import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../components/Button";
import { ModalOptionsMobile } from "../ModalOptionsMobile";
import { Container } from "./styles";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export const HeaderButtonsMobile = ({update}) => {
  return (
    <Container>
      <button className="open-options-button" onClick={update}>
        <FontAwesomeIcon className="collapsed-icon" icon={faArrowsRotate} />
      </button>
      <input className="input-search" type="text" placeholder="Buscar" />
      <Button className="filter" title="Filtrar" />
      <ModalOptionsMobile />
    </Container>
  );
};
