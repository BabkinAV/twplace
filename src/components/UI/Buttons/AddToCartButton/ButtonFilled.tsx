import { ReactNode } from 'react';
import { StyledButtonFilled } from './ButtonFilled.styles';

const ButtonFilled = ({
  children,
	onClick
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return <StyledButtonFilled onClick={onClick}>{children}</StyledButtonFilled>;
};

export default ButtonFilled;
