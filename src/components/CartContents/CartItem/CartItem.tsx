import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import { Product } from '../../../types';

import TrashIcon from '../../assets/images/TrashIcon.svg';

import productsData from '../../../../data/dummyFeaturedProductsList.json';

const productsArr = productsData as Product[];

const CartItem = ({cartItem}: {cartItem: {product: Product, quantity: number}}) => {
  return (
    <StyledCartItem>
      <div className="cartItem__checkbox-wrapper">
        <Checkbox />
      </div>
      <div className="cartItem__content-wrapper">
        <CartItemContent
          productItem={cartItem.product}
          cartProductQuantity={cartItem.quantity}
        />
      </div>
      <div className="deleteButton__wrapper">
        <IconButton imageSrc={TrashIcon} title="Trash" />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
