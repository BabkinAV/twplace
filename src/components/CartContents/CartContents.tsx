import React from 'react';
import { StyledCartContents } from './CartContents.styles';
import CartItem from './CartItem/CartItem';
import { StyledSubtotal } from './Subtotal/Subtotal.styles';
import Subtotal from './Subtotal/Subtotal';

const CartContents = () => {
  return (
    <StyledCartContents className="cart">
      <div className="cart__items-wrapper">
        {/* <div className="cart__select-all">Выбрать все</div> */}
        <div className="cart__items">
          {Array.from({ length: 5 }).map((el, idx) => (
            <CartItem key={idx} />
          ))}
        </div>
      </div>
      <div className="cart__subtotal--wrapper">
        <Subtotal
          className="cart__subtotal subtotal"
          subTotal={3998}
          productsInCartNumber={2}
          discount={1000}
          // deliveryAddr='ул. Ленина'
        />
      </div>
    </StyledCartContents>
  );
};

export default CartContents;
