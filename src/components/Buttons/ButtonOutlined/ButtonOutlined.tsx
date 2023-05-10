import React, { ReactNode } from 'react';
import { StyledButtonOutlined } from './ButtonOutlined.styles';

const ButtonOutlined = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <StyledButtonOutlined className={className}>
      {children}
    </StyledButtonOutlined>
  );
};

export default ButtonOutlined;
