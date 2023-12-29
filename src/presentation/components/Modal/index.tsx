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
  height?: string; // Prop para a altura do modal
  width?: string; // Prop para a largura do modal
  title?: string;
  className?:string
  top?:string
  left?:string
}

export const Modal = ({ show,top, left, handleClose,width,height,children, title,className }: ModalProps) => {
  return (
    <>
      <ModalWrapper  onClick={handleClose} show={show} />
      <ModalContent show={show} width={width} height={height} className={className} top={top} left={left}>
        <div className="buttons-modal">
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </div>
        <Content >{children}</Content>
      </ModalContent>
    </>
  );
};
