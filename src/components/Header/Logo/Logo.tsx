import React from 'react';
import { StyledLogo } from './Logo.styles';
import Image from 'next/image';
import logoImg from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <StyledLogo>
      <Image src={logoImg} alt="TWplace" />
      <h1>Товары из Тайваня от производителя</h1>
    </StyledLogo>
  );
};

export default Logo;
