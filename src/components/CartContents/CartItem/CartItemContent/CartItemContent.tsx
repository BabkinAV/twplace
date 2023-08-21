import Image from 'next/image';
import { cartProductsVar, changeCartProductQuantity } from '../../../../cache/cartProducts/cartProductsVar';
import { CartProduct, Product } from '../../../../types';
import Counter from '../../../UI/Counter/Counter';
import LinePrice from '../../../assets/images/LinePrice.svg';
import { StyledCartItemContent } from './CartItemContent.styles';

const CartItemContent = ({
  cartItem,
}: {
  cartItem: CartProduct;
}) => {

  return (
    <StyledCartItemContent>
      <div className="cartItem__image-wrapper">
        <Image
          src={cartItem.imageLink}
          alt={`${cartItem.title} image`}
          width={100}
          height={100}
        />
      </div>
      <div className="cartItem__title-wrapper">
        <div className="cartItem__heading">
          <span>Наименование товара</span>
        </div>
        <div className="cartItem__text">
          <span>{cartItem.title}</span>
        </div>
      </div>
      <div className="cartItem__color-wrapper">
        <div className="cartItem__heading">
          <span>Цвет</span>
        </div>
        <div className="cartItem__text">
          <span>{cartItem.color}</span>
        </div>
      </div>
      <div className="cartItem__size-wrapper">
        <div className="cartItem__heading">
          <span>Размер</span>
        </div>
        <div className="cartItem__text">
          <span>{cartItem.size}</span>
        </div>
      </div>
      <div className="cartItem__quantity-wrapper">
        <div className="cartItem__heading">
          <span>Количество</span>
        </div>
        <Counter
          count={cartItem.quantity}
          countModify={modifier =>
            changeCartProductQuantity(cartItem._id, modifier)
          }
        />
      </div>
      <div className="cartItem__price-wrapper">
        <div className="cartItem__heading">
          <span>Цена</span>
        </div>
        <div className="cartItem__text cartItem__price">
          {cartItem.price.priceOld ? (
            <>
              <ins>{cartItem.price.priceCurrent} ₽</ins>
              <del>
                {cartItem.price.priceOld} ₽
                <span className="price-line">
                  <Image src={LinePrice} alt="strikethrough line" fill />
                </span>
              </del>
            </>
          ) : (
            <div className="price__default">
              {cartItem.price.priceCurrent} ₽
            </div>
          )}
        </div>
      </div>
    </StyledCartItemContent>
  );
};

export default CartItemContent;
