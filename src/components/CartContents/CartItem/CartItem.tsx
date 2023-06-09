import { Product } from '../../../types';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';

import { useCart } from '../../../../store/context/cartContext';
import { cartProductsVar } from '../../../cache/cache';
import TrashIcon from '../../assets/images/TrashIcon.svg';

const CartItem = ({
  cartItem,
}: {
  cartItem: { product: Product; quantity: number };
}) => {
  const handleDeleteCartProduct = (productId: string) => {
    cartProductsVar(
      cartProductsVar().filter(
        cartProductsItem => cartProductsItem.product._id !== productId
      )
    );
  };

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
          onClick={() => handleDeleteCartProduct(cartItem.product._id)}
        />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
