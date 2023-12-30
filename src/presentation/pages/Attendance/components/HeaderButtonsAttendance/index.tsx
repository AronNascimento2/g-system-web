import { faArrowsRotate, faScroll } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsAttendance = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
    
      <DynamicButton text="Script de atendimento" icon={faScroll}/>
     
    </Container>
  );
};
