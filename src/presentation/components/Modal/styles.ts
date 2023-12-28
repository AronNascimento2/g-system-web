import styled, { css } from "styled-components";
interface ModalProps {
  show: boolean;
  width?: string; // Prop para a largura do modal
  height?: string; // Prop para a altura do modal
  position?: string; // Prop para a posição do modal
}

export const ModalWrapper = styled.div<ModalProps>`
  ${({ show }) =>
    show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div<ModalProps>`
  ${({ show }) =>
    show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  min-width: ${({ width }) => width ?? "400px"}; // Largura do modal
  min-height: ${({ height }) => height ?? "200px"}; // Altura do modal
  position: absolute;
  ${({ position }) => position ?? "top: 50%; left: 50%;"}
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 30%;
  max-height: 80%;
  overflow-y: auto;
  .buttons-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1080px) {
    min-width: 90%;
    max-width: 90%;
    min-height: 20%;
    max-height: 70%;
    ${({ position }) => (position ? "" : "top: 50%; left: 50%;")}
  }
 
`;

export const CloseButton = styled.span`
  top: 5px;
  right: 10px;
  font-size: 40px;
  cursor: pointer;
`;
export const Title = styled.span`
  top: 10px;
  left: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div``;
