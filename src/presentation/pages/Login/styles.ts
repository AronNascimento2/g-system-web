import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .buttons{
    padding-top: 1rem;
    justify-content: center;
  }
  .error-message {
    color: #d8000c;
    background-color: #ffbaba;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 400px;
  }
  @media (max-width: 767px) {
    max-width: 300px;
    padding: 15px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  .inputmask {
    font-size: 20px;
    width: 400px;
    height: 50px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;

export const Input = styled.input`
  font-size: 20px;
  width: 400px;
  height: 50px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 767px) {
    width: auto;
  }
`;

export const InputWrapper = styled.div`
  display: flex;

  position: relative;
  @media (max-width: 767px) {
    max-width: 300px;
  }
`;
export const TogglePasswordVisibility = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
