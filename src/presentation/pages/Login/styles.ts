import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2980b9;

  height: 100%;
  .wrapperform {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding-top: 3rem;
    width: 100%;
    @media (max-width: 767px) {
      padding: 0.5rem;
    }

  }
  @media (max-width: 767px) {

    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding-top: 2rem; /* Add padding to avoid vertical overflow */
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
    padding: 1rem;

    .icon {
      padding-bottom: 0.5rem;
    }
    p {
      color: #2980b9;
      font-size: 25px;
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
      width: 100%;

      padding: 1rem; /* Adjust padding for smaller screens */
    }
    @media (max-width: 767px) {
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
      width: 100%;
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
      width: 20%;
      align-self: center;
    }
  }
  @media (max-width: 767px) {
    .div-logo img {
      width: 80%;
      max-width: 200px;
      align-self: auto;
      /* Outros estilos para telas menores, se necessário */
    }
  }
`;
