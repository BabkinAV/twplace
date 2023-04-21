import React from 'react';
import Link from 'next/link';
import { StyledHeader } from './Header.styles';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';
import HeaderLink from './HeaderLink/HeaderLink';

import UserIcon from '../../assets/images/UserIcon.svg';
import HeartIcon from '../../assets/images/HeartIcon.svg';
import CartIcon from '../../assets/images/CartIcon.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />

      <Logo />

      <SearchForm />
      <Link href="#">
        <HeaderLink imageSrc={UserIcon} altText="User Icon" subTitle="Войти" />
      </Link>
      <Link href="#">
        <HeaderLink
          imageSrc={HeartIcon}
          altText="Heart Icon"
          subTitle="Избранное"
          badgeCounter={1}
        />
      </Link>
      <Link href="#">
        <HeaderLink
          imageSrc={CartIcon}
          altText="Cart Icon"
          subTitle="Корзина"
          badgeCounter={1}
        />
      </Link>
    </StyledHeader>
  );
};

export default Header;
