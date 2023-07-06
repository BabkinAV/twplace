import { ReactNode } from 'react';
import { StyledButtonFilled } from './ButtonFilled.styles';

const ButtonFilled = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <StyledButtonFilled onClick={onClick} className={className}>
      {children}
    </StyledButtonFilled>
  );
};

export default ButtonFilled;
