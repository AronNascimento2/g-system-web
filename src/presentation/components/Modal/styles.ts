import styled, { css } from "styled-components";
interface ModalProps {
  show: boolean;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
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

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  overflow-y: auto;
  z-index: 999;
  .buttons-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1080px) {
    min-width: 90%;
    max-width: 95%;
    min-height: 20%;
    left: ${({ left }) => left ?? "50%"};
    top: ${({ top }) => top ?? "90%"};
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
