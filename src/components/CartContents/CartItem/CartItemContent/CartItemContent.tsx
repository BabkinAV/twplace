import React, { useState } from 'react';
import { StyledCartItemContent } from './CartItemContent.styles';
import { Product } from '../../../../types';
import Image from 'next/image';
import LinePrice from '../../../assets/images/LinePrice.svg';
import Counter from '../../../UI/Counter/Counter';

const CartItemContent = ({
  productItem,
  cartProductQuantity,
}: {
  productItem: Product;
  cartProductQuantity: number;
}) => {
  const [productCount, setProductCount] = useState(1);
  const handleCountModify = (modifier: 'inc' | 'dec' | number) => {
    if (typeof modifier === 'number') {
      setProductCount(modifier);
    }
    if (modifier === 'inc') {
      setProductCount(prevState => prevState + 1);
    } else if (modifier === 'dec' && productCount > 1) {
      setProductCount(prevState => prevState - 1);
    }
  };
  return (
    <StyledCartItemContent>
      <div className="cartItem__image-wrapper">
        <Image
          src={productItem.imageLink}
          alt={`${productItem.title} image`}
          width={100}
          height={100}
        />
      </div>
      <div className="cartItem__title-wrapper">
        <div className="cartItem__heading">
          <span>Наименование товара</span>
        </div>
        <div className="cartItem__text">
          <span>{productItem.title}</span>
        </div>
      </div>
      <div className="cartItem__color-wrapper">
        <div className="cartItem__heading">
          <span>Цвет</span>
        </div>
        <div className="cartItem__text">
          <span>{productItem.color}</span>
        </div>
      </div>
      <div className="cartItem__size-wrapper">
        <div className="cartItem__heading">
          <span>Размер</span>
        </div>
        <div className="cartItem__text">
          <span>{productItem.size}</span>
        </div>
      </div>
      <div className="cartItem__quantity-wrapper">
        <div className="cartItem__heading">
          <span>Количество</span>
        </div>
        <Counter count={cartProductQuantity} countModify={handleCountModify} />
      </div>
      <div className="cartItem__price-wrapper">
        <div className="cartItem__heading">
          <span>Цена</span>
        </div>
        <div className="cartItem__text cartItem__price">
          {productItem.price.priceOld ? (
            <>
              <ins>{productItem.price.priceCurrent} ₽</ins>
              <del>
                {productItem.price.priceOld} ₽
                <span className="price-line">
                  <Image src={LinePrice} alt="strikethrough line" fill />
                </span>
              </del>
            </>
          ) : null}
        </div>
      </div>
    </StyledCartItemContent>
  );
};

export default CartItemContent;
