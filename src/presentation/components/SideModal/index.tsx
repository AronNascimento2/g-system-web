import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalWrapper,
} from "./styles";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const SideModal = ({ show, handleClose, children }: ModalProps) => {
  return (
    <>
      <ModalWrapper onClick={handleClose} show={show} />
      <ModalContainer show={show}>
        <ModalContent>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
};
