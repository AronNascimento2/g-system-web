import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export const UpdateButton = ({update}) => {
  return (
    <Container>
      <button className="open-options-button" onClick={update}>
        <FontAwesomeIcon className="collapsed-icon" icon={faArrowsRotate} />
      </button>
    </Container>
  );
};
