import React from 'react';
import { StyledFooter } from './Footer.styles';
import Container from '../Container/Container';
import Link from 'next/link';
import FormFooter from './FormFooter/FormFooter';

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__links">
            <div className="footer__list-wrap">
              <h4 className="footer__heading">Покупателям</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    Как это работает
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Защита покупателя
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Условия оплаты
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Условия использования
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Регистрация аккаунта
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__list-wrap">
              <h4 className="footer__heading">Поставщикам</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    Как стать продавцом
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Правила участия
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Личный кабинет продавца
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__list-wrap">
              <h4 className="footer__heading">О компании</h4>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    О twPlace
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Новости
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Часто задаваемые вопросы
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Служба поддержки
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__item">
                    Сообщить о нарушении авторских прав
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__form-wrap">
            <FormFooter />
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
