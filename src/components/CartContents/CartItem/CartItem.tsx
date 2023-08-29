import { useTheme } from 'styled-components';
import { CartProduct } from '../../../types';
import IconButton from '../../UI/Buttons/IconButton/IconButton';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { StyledCartItem } from './CartItem.styles';
import CartItemContent from './CartItemContent/CartItemContent';

import { ChangeEventHandler } from 'react';
import { toast } from 'react-toastify';
import { deleteCartProduct } from '../../../cache/cartProducts/cartProductsVar';
import TrashIcon from '../../assets/images/TrashIcon.svg';
import Image from 'next/image';

const CartItem = ({
  cartItem,
  isSelected,
  handleIsSelectedChange,
}: {
  cartItem: CartProduct;
  isSelected: boolean;
  handleIsSelectedChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  const theme = useTheme();
  const handleTrashButtonClick = (productId: string) => {
    deleteCartProduct(productId);
    toast.success('Товар удален из корзины', {
      icon: (
        <Image src={TrashIcon} alt="Trash Icon" style={{ height: 'auto' }} />
      ),
    });
  };
  return (
    <StyledCartItem>
      <div className="cartItem__checkbox-wrapper">
        <Checkbox checked={isSelected} handleChange={handleIsSelectedChange} />
      </div>
      <div className="cartItem__content-wrapper">
        <CartItemContent cartItem={cartItem} />
      </div>
      <div className="deleteButton__wrapper">
        <IconButton
          imageSrc={TrashIcon}
          title="Trash"
          onClick={() => handleTrashButtonClick(cartItem._id)}
          borderColor={theme.palette.colors.red100}
        />
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
