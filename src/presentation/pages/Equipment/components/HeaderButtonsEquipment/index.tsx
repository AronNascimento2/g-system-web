import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../../../../components/DynamicButton";
import { Container } from "./styles";

export const HeaderButtonsEquipment = () => {
  return (
    <Container>
      <DynamicButton text="Atualizar" icon={faArrowsRotate} />
    </Container>
  );
};
