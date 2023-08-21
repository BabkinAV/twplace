import { useTheme } from 'styled-components';
import { CartProduct } from '../../../types';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';

import { ChangeEventHandler } from 'react';
import { deleteCartProduct } from '../../../cache/cartProducts/cartProductsVar';
import TrashIcon from '../../assets/images/TrashIcon.svg';

const CartItem = ({
  cartItem,
	isSelected,
	handleIsSelectedChange
}: {
  cartItem: CartProduct;
	isSelected: boolean,
	handleIsSelectedChange: ChangeEventHandler<HTMLInputElement>
}) => {
	const theme = useTheme();
  return (
    <StyledCartItem>
      <div className="cartItem__checkbox-wrapper">
        <Checkbox checked={isSelected} handleChange={handleIsSelectedChange}/>
      </div>
      <div className="cartItem__content-wrapper">
        <CartItemContent
          cartItem={cartItem}
        />
      </div>
      <div className="deleteButton__wrapper">
        <IconButton
          imageSrc={TrashIcon}
          title="Trash"
          onClick={() => deleteCartProduct(cartItem._id)}
					borderColor={theme.palette.colors.red100}
        />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
