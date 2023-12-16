import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #2980b9;
  padding-top: 3rem;
  height: 100%;
  @media (max-width: 767px) {
    padding: 3rem 1rem;
    /* Add padding to avoid vertical overflow */
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem;

    .icon {
      padding-bottom: 0.5rem;
    }
    .title {
      color: #2980b9;
      font-size: 25px;
      font-weight: 600;
      @media (max-width: 767px) {
        font-size: 20px;
        .message {
          font-size: 9px;
        }
      }
    }
    .buttons {
      width: 100%;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      .button {
        font-size: 16px;
        margin: 0;
        width: 100%;
        height: 40px;
        font-size: 16px;
        padding: 14px 16px;
        border-radius: 8px;
        font-weight: 600;
      }
    }
    .error-message-container {
      background-color: #ffbaba;
      height: 40px;
      font-size: 16px;
      padding: 14px 16px;
      border-radius: 8px;
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      .message {
        color: #ff3333;
        font-size: 14px;
        margin: 0;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      padding: 1rem;
      .error-message-container {
        .message {
          font-size: 12px;
        }
      } /* Adjust padding for smaller screens */
    }
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;

  .inputmask {
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const TogglePasswordVisibility = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column-reverse;
  .div-logo {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
  @media (max-width: 767px) {
    .div-logo {
      height: 200px;
    }
    .div-logo img {
      /* Outros estilos para telas menores, se necessário */
    }
  }
`;
