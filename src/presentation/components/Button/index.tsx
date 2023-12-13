import { ButtonContainer, IconContainer, Loader } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  title: string;
  size?: 'small' | 'medium' | 'large';
  secondaryColor?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  title,
  size = 'medium',
  secondaryColor = '#2980b9',
  icon,
  iconPosition = 'left',
  ...rest
}) => {
  const renderIcon = icon && (
    <IconContainer position={iconPosition}>
      {icon}
    </IconContainer>
  );

  return (
    <ButtonContainer
      size={size}
      disabled={rest.disabled ?? loading}
      secondaryColor={secondaryColor}
      {...rest}
    >
      {iconPosition === 'left' && renderIcon}
      {!loading ? (
        <span>{title}</span>
      ) : (
        <Loader />
      )}
      {iconPosition === 'right' && renderIcon}
    </ButtonContainer>
  );
};