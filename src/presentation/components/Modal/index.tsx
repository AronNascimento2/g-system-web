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
  position?: string; // Prop para a posição do modal
  height?: string; // Prop para a altura do modal
  width?: string; // Prop para a largura do modal
  title?: string;
  className?:string
}

export const Modal = ({ show,position, handleClose,width,height,children, title,className }: ModalProps) => {
  return (
    <>
      <ModalWrapper position={position} onClick={handleClose} show={show} />
      <ModalContent show={show} width={width} height={height} className={className}>
        <div className="buttons-modal">
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </div>
        <Content >{children}</Content>
      </ModalContent>
    </>
  );
};
