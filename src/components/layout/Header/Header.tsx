import React from 'react';
import { StyledHeader } from './Header.styles';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger /> 
			
			<Logo />

			<SearchForm />
    </StyledHeader>
  );
};

export default Header;
