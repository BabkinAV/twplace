import { ReactNode } from 'react';
import { StyledButtonFilled } from './ButtonFilled.styles';

const ButtonFilled = ({
  children,
  onClick,
  className,
	type

}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
	type?: 'submit' | 'button' | 'reset'
}) => {
  return (
    <StyledButtonFilled onClick={onClick} className={className} type={type}>
      {children}
    </StyledButtonFilled>
  );
};

export default ButtonFilled;
