import React, { ReactNode } from 'react';
import { StyledButtonFilled } from './ButtonFilled.styles';

const ButtonFilled = ({ children }: { children: ReactNode }) => {
  return <StyledButtonFilled>{children}</StyledButtonFilled>;
};

export default ButtonFilled;
