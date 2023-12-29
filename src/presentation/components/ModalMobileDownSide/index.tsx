import { faClose } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "../DynamicButton";
import { ModalContainer, ModalContent, ModalWrapper } from "./styles";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  className?:string
}
export const ModalMobileDownSide = ({
  show,
  handleClose,
  children,
  className,
}: ModalProps) => {
  return (
    <>
      <ModalWrapper onClick={handleClose} show={show} />
      <ModalContainer show={show}>
        <ModalContent className={className} >
          <span className="closeButton" onClick={handleClose} tabIndex={0}>
            &times;
          </span>
          {children}
        <DynamicButton text="Fechar" icon={faClose} onClick={handleClose} width="120px"/>
        </ModalContent>
      </ModalContainer>
    </>
  );
};
