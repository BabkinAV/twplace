import React, { useState } from 'react';
import { StyledCartContents } from './CartContents.styles';
import CartItem from './CartItem/CartItem';
import Subtotal from './Subtotal/Subtotal';
import { Product } from '../../types';
import productsData from '../../../data/dummyFeaturedProductsList.json';
import Checkbox from '../UI/Checkbox/Checkbox';

const productsArr = productsData as Product[];

const demoData = productsArr.slice(0, 3).map((el, idx) => {
  return { product: el, quantity: 1 };
});

const CartContents = () => {
  const [cartProducts, setCartProducts] = useState(demoData);

  return (
    <StyledCartContents className="cart">
      <h2 className='cart__header'>Корзина</h2>
      <div className="cart__select-all select-all">
        <Checkbox label="Выбрать все" className="select-all__checkbox" />
      </div>
      <div className="cart__contents">
        <div className="cart__items-wrapper">
          <div className="cart__items">
            {cartProducts.map((el, idx) => (
              <CartItem cartItem={el} key={el.product.id} />
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
      </div>
    </StyledCartContents>
  );
};

export default CartContents;
