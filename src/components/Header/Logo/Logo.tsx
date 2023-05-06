import React from 'react';
import { StyledLogo } from './Logo.styles';
import Image from 'next/image';
import logoImg from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <StyledLogo>
      <Image src={logoImg} alt="TWplace" />
    </StyledLogo>
  );
};

export default Logo;
