import React from 'react';
import { StyledHeader } from './Header.styles';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger /> 
			
			<Logo />
    </StyledHeader>
  );
};

export default Header;
