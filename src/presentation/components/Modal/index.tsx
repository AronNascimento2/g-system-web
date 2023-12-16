import {
  CloseButton,
  Content,
  ModalContent,
  ModalWrapper,
  Title,
} from "./styles";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal = ({ show, handleClose, children, title }: ModalProps) => {
  return (
    <>
      <ModalWrapper onClick={handleClose} show={show} />
      <ModalContent show={show}>
        <div className="buttons-modal">
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </div>
        <Content>{children}</Content>
      </ModalContent>
    </>
  );
};
