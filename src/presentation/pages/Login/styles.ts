import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2980b9;
  overflow: hidden;

 

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    max-width: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 3rem 1.5rem;
    h2{
      color: #2980b9;
    }
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
      width: 60%;
      
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
  overflow: auto;
  justify-content: center;
  flex-direction: column-reverse;
  .div-logo {
    flex: 1;
    height: 80%;
    justify-content: center;
    display: flex;
    img {
      width: auto;

      height: auto;
      align-self: center;
      padding-top: 3rem;
    }
    background-color: #fff;
  }
  @media (max-width: 767px) {
  }
`;
