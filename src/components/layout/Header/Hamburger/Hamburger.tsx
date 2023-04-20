import React from 'react';
import Image from 'next/image';

import hamburgerIcon from '../../../assets/images/hamburgerIcon.svg'

import { StyledHamburger } from './Hamburger.styles';

const Hamburger = () => {
  return (
    <StyledHamburger>
      <Image
        priority
        src={hamburgerIcon}
        alt="hamburgerIcon"
      />
    </StyledHamburger>
  );
};

export default Hamburger;
