import React from 'react';
import { StyledHeader } from './Header.styles';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';
import LoginLink from './LoginIcon/LoginLink';

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />

      <Logo />

      <SearchForm />
      <LoginLink />
    </StyledHeader>
  );
};

export default Header;
