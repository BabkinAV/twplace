import React from 'react';
import Link from 'next/link';
import { StyledHeader } from './Header.styles';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';
import HeaderLink from './HeaderLink/HeaderLink';

import UserIcon from '../assets/images/UserIcon.svg';
import HeartIcon from '../assets/images/HeartIcon.svg';
import CartIcon from '../assets/images/CartIcon.svg';
import StyledRowDoubleColumns from '../layout/RowDoubleColumns/RowDoubleColumns';

const Header = () => {
  return (
    <StyledHeader>
      <StyledRowDoubleColumns>
        <div className="column-left">
          <Hamburger />

          <Logo />
        </div>
        <div className="column-right">
          <div className="search_form-wrapper">
            <SearchForm />
          </div>
          <div className='login_links-wrapper'>
            <Link href="#">
              <HeaderLink
                imageSrc={UserIcon}
                altText="User Icon"
                subTitle="Войти"
              />
            </Link>
            <Link href="#">
              <HeaderLink
                imageSrc={HeartIcon}
                altText="Heart Icon"
                subTitle="Избранное"
                badgeCounter={1}
                badgeCoord={[-3, 15]}
              />
            </Link>
            <Link href="#">
              <HeaderLink
                imageSrc={CartIcon}
                altText="Cart Icon"
                subTitle="Корзина"
                badgeCounter={1}
                badgeCoord={[0, 10]}
              />
            </Link>
          </div>
        </div>
      </StyledRowDoubleColumns>
    </StyledHeader>
  );
};

export default Header;
