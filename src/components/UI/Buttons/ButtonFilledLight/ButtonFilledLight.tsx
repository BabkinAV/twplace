import { ReactNode } from 'react';
import { StyledButtonFilledLight } from './ButtonFilledLight.styles';

const ButtonFilledLight = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <StyledButtonFilledLight onClick={onClick} className={className}>
      {children}
    </StyledButtonFilledLight>
  );
};

export default ButtonFilledLight;
