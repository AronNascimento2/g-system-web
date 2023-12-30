import {
  faArrowsRotate,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsSinisters = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
      <DynamicButton text="Scripts" icon={faScroll} />
     
    </Container>
  );
};
