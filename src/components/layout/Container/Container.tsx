import React, { ReactNode } from 'react';
import { StyledContainer } from './Container.styles';

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
