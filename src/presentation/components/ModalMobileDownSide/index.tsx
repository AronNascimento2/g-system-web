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
        </ModalContent>
      </ModalContainer>
    </>
  );
};
