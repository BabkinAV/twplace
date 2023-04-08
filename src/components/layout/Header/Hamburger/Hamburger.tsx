import React from 'react';
import Image from 'next/image';
import hamburgerIcon from '../../../../../public/hamburgerIcon.svg';
import { StyledHamburger } from './Hamburger.styles';

const Hamburger = () => {
  return (
    <StyledHamburger>
      <Image priority src={hamburgerIcon} alt="hamburgerIcon" />
    </StyledHamburger>
  );
};

export default Hamburger;
