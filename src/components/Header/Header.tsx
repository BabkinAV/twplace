import { useReactiveVar } from '@apollo/client';
import Link from 'next/link';
import Hamburger from './Hamburger/Hamburger';
import { StyledHeader } from './Header.styles';
import HeaderLink from './HeaderLink/HeaderLink';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';

import { cartProductsVar } from '../../cache/cache';
import CartIcon from '../assets/images/CartIcon.svg';
import HeartIcon from '../assets/images/HeartIcon.svg';
import UserIcon from '../assets/images/UserIcon.svg';
import StyledRowDoubleColumns from '../layout/RowDoubleColumns/RowDoubleColumns';

const Header = () => {
	const cartProducts = useReactiveVar(cartProductsVar);

  return (
    <StyledHeader>
      <StyledRowDoubleColumns>
        <div className="column-left">
          <Hamburger />
          <Link href="/" className='logo__link'>
            <Logo />
          </Link>
        </div>
        <div className="column-right">
          <div className="search_form-wrapper">
            <SearchForm />
          </div>
          <div className="login_links-wrapper">
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
                badgeCounter={0}
                badgeCoord={[-3, 15]}
              />
            </Link>
            <Link href="/cart">
              <HeaderLink
                imageSrc={CartIcon}
                altText="Cart Icon"
                subTitle="Корзина"
                badgeCounter={cartProducts.length}
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
