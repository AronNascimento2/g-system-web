import React from 'react';
import { ButtonContainer, Loader } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ loading, title, ...rest }) => {
  return (
    <ButtonContainer {...rest} disabled={rest.disabled ?? loading}>
      {!loading ? (
        <span>{title}</span>
      ) : (
        <Loader />
      )}
    </ButtonContainer>
  );
};
