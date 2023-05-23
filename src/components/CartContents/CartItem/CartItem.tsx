import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import { Product } from '../../../types';

import TrashIcon from '../../assets/images/TrashIcon.svg';

import productsData from '../../../../data/dummyFeaturedProductsList.json';

const productsArr = productsData as Product[];

const CartItem = () => {
  return (
    <StyledCartItem>
      <div className="cartItem__checkbox-wrapper">
        <Checkbox />
      </div>
      <div className="cartItem__content-wrapper">
        <CartItemContent
          productItem={productsArr[0]}
          cartProductQuantity={23}
        />
      </div>
      <div className="deleteButton__wrapper">
        <IconButton imageSrc={TrashIcon} title="Trash" />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
