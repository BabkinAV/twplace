import React from 'react';
import { StyledSubtotal } from './Subtotal.styles';
import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';

const Subtotal = ({
  className,
  subTotal,
  productsInCartNumber,
  discount,
  deliveryAddr,
  billingMethod,
}: {
  className: string;
  subTotal: number;
  productsInCartNumber: number;
  discount: number;
  deliveryAddr?: string;
  billingMethod?: string;
}) => {
  return (
    <StyledSubtotal className={className}>
      <h3 className="subtotal__heading">
        <span className="subtitle__text subtitle__text--bold">Оплата</span>
        <span className="subtitle__text">{subTotal} ₽</span>
      </h3>
      <div className="subtotal__list">
        <div className="subtotal__item">
          <span className="subtitle__text subtitle__text--bold">Товары</span>
          <span className="subtitle__text">{productsInCartNumber} шт.</span>
        </div>
        <div className="subtotal__item">
          <span className="subtitle__text subtitle__text--bold">Скидка</span>
          <span className="subtitle__text">{discount} ₽</span>
        </div>
        <div className="subtotal__item">
          <span className="subtitle__text subtitle__text--bold">Доставка</span>
          <span
            className={`subtitle__text${
              deliveryAddr ? '' : ' subtitle__text--underlined'
            }`}
          >
            {deliveryAddr ?? 'Выбрать адрес доставки'}
          </span>
        </div>
        <div className="subtotal__item">
          <span className="subtitle__text subtitle__text--bold">Оплата</span>
          <span
            className={`subtitle__text${
              billingMethod ? '' : ' subtitle__text--underlined'
            }`}
          >
            {billingMethod ?? 'Выбрать способ оплаты'}
          </span>
        </div>
      </div>
      <div className="subtotal__button--wrapper">
        <ButtonFilled className='subtotal__button'>Оформить заказ</ButtonFilled>
      </div>
    </StyledSubtotal>
  );
};

export default Subtotal;
