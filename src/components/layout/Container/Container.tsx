import React from 'react';
import { StyledContainer } from './Container.styles';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer className='container'>{children}</StyledContainer>;
};

export default Container;
