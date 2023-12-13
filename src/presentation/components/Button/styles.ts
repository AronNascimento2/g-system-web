import styled from 'styled-components';

interface ButtonContainerProps {
  disabled?: boolean;
  loading?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  cursor: ${({ disabled, loading }) => (disabled || loading ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#3498db')};
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.3s ease;
  width: 100%;
  align-items: center;
    display: flex;
    justify-content: center;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2980b9')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
