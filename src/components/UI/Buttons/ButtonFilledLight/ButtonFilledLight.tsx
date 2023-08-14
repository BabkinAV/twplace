import { MouseEventHandler, ReactNode } from 'react';
import { StyledButtonFilledLight } from './ButtonFilledLight.styles';

const ButtonFilledLight = ({
  children,
  onClick,
  className,
	buttonType
}: {
  children: ReactNode;
  onClick?:MouseEventHandler<HTMLButtonElement>;
  className?: string;
	buttonType?: "button" | "submit" | "reset";
}) => {
  return (
    <StyledButtonFilledLight onClick={onClick} className={className} type={buttonType}>
      {children}
    </StyledButtonFilledLight>
  );
};

export default ButtonFilledLight;
