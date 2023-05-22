import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import { Product } from '../../../types';

import productsData from '../../../../data/dummyFeaturedProductsList.json';

const productsArr = productsData as Product[];

const CartItem = () => {
  return (
    <StyledCartItem>
      <Checkbox />
      <CartItemContent
        className="cartItem__content"
        productItem={productsArr[0]}
      />
      <div className='deleteButton__wrapper'>
        <IconButton />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
