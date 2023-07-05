import { useTheme } from 'styled-components';
import { Product } from '../../../types';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';

import { deleteCartProduct } from '../../../cache/cartProducts/cartProductsVar';
import TrashIcon from '../../assets/images/TrashIcon.svg';

const CartItem = ({
  cartItem,
}: {
  cartItem: { product: Product; quantity: number };
}) => {
	const theme = useTheme();
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
        <IconButton
          imageSrc={TrashIcon}
          title="Trash"
          onClick={() => deleteCartProduct(cartItem.product._id)}
					borderColor={theme.palette.colors.red100}
        />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
