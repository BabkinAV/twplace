import React from 'react';
import Image from 'next/image';

import { StyledLoginLink } from './LoginLink.styles';
import UserIcon from '../../../assets/images/UserIcon.svg';

const LoginLink = () => {
  return (
    <StyledLoginLink>
      <Image priority src={UserIcon} alt="User Icon" />
			<span>Войти</span>
    </StyledLoginLink>
  );
};

export default LoginLink;
