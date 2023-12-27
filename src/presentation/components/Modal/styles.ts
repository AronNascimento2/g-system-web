import styled from "styled-components";
interface ModalProps {
  show: boolean;
}

export const ModalWrapper = styled.div<ModalProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div<ModalProps>`
  min-width: 400px;
  min-height: 200px;
  position: absolute;
  display: ${({ show }) => (show ? "block" : "none")};
  top: 50%;
  left: 55%;
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
    max-width: 90%;
    left: 50%;
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
