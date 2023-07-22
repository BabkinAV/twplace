import { useReactiveVar } from '@apollo/client';
import Link from 'next/link';
import Hamburger from './Hamburger/Hamburger';
import { StyledHeader } from './Header.styles';
import HeaderLink from './HeaderLink/HeaderLink';
import Logo from './Logo/Logo';
import SearchForm from './Search/SearchForm';
import { useCookies } from 'react-cookie';
import { cartProductsVar } from '../../cache/cartProducts/cartProductsVar';
import { modalIsShownVar } from '../../cache/ModalISShown/modalIsShownVar';
import { isUserAuthenticatedVar } from '../../cache/userIsAuthenticated/isUserAuthenticatedVar';

import CartIcon from '../assets/images/CartIcon.svg';
import HeartIcon from '../assets/images/HeartIcon.svg';
import UserIcon from '../assets/images/UserIcon.svg';
import StyledRowDoubleColumns from '../layout/RowDoubleColumns/RowDoubleColumns';
import ExitIcon from '../assets/images/ExitIcon.svg';
import OrderIcon from '../assets/images/OrderIcon.svg';

const Header = () => {
  const cartProducts = useReactiveVar(cartProductsVar);
  const isUserAuthenticated = useReactiveVar(isUserAuthenticatedVar);
	const [cookies, setCookie, removeCookie] = useCookies(['token']);
	const logoutHandler = () => {
		isUserAuthenticatedVar(false);
		removeCookie('token');
	}

  return (
    <StyledHeader>
      <StyledRowDoubleColumns>
        <div className="column-left">
          <Hamburger />
          <Link href="/" className="logo__link">
            <Logo />
          </Link>
        </div>
        <div className="column-right">
          <div className="search_form-wrapper">
            <SearchForm />
          </div>
          <div className="login_links-wrapper">
            {isUserAuthenticated ? (
              <>
                <button className="logout__button">
                  <HeaderLink
                    imageSrc={ExitIcon}
                    altText="Logout Icon"
                    subTitle="Выйти"
                    onClick={logoutHandler}
                  />
                </button>
								<Link href="/orders">
                  <HeaderLink
                    imageSrc={OrderIcon}
                    altText="Order Icon"
                    subTitle="Заказы"
                  />
                </Link>
              </>
            ) : (
              <button className="login__button">
                <HeaderLink
                  imageSrc={UserIcon}
                  altText="User Icon"
                  subTitle="Войти"
                  onClick={() => modalIsShownVar(true)}
                />
              </button>
            )}

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
