import React, { ReactNode } from 'react';
import { StyledButtonOutlined } from './ButtonOutlined.styles';

const ButtonOutlined = ({
  children,
  className,
	onClick
}: {
  children?: ReactNode;
  className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <StyledButtonOutlined className={className} onClick={onClick}>
      {children}
    </StyledButtonOutlined>
  );
};

export default ButtonOutlined;
