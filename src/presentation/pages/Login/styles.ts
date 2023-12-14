import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 3;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #2980b9;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    max-width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 3rem 1.5rem;
    margin-top: 3rem;

    .icon {
      padding-bottom: 0.5rem;
    }
    h1 {
      color: #2980b9;
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
      }
    }

    @media (max-width: 767px) {
      width: 80%;
      position: absolute;
      top: 0%;
      .buttons {
        width: 100%;

        .button {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }

    .error-message {
      color: #d8000c;
      background-color: #ffbaba;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      max-width: 400px;
    }
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  width: 100%;

  .inputmask {
    font-size: 20px;
    width: 100%;
    height: 50px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  font-size: 20px;
  width: 100%;
  height: 50px;
  padding: 8px;
  border-radius: 3px;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  .div-logo {
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Sombra desejada */
    flex: 1;
    img {
      width: 100%;
      height: auto;
      align-self: center;
      padding-top: 3rem;
    }
    background-color: #fff;
  }
  @media (max-width: 767px) {
  }
`;
