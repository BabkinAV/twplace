import React from 'react';
import Image from 'next/image';

import { StyledProductCard } from './ProductCard.styles';

import LinePrice from '../assets/images/LinePrice.svg';

const ProductCard = ({
  productImgLink,
  productTitle,
  priceCurrent,
  priceOld,
  discount,
}: {
  productImgLink: string;
  productTitle: string;
  priceCurrent: number;
  priceOld?: number;
  discount?: number;
}) => {
  return (
    <StyledProductCard>
      <div className="image-wrapper">
        <Image
          src={productImgLink}
          width={160}
          height={160}
          alt={productTitle}
        />
        <span>{discount}</span>
      </div>
      <div className="price-wrapper">
        <p className="price">
          {priceOld ? (
            <>
              <ins>{priceCurrent} ₽</ins>
              <del>
                {priceOld} ₽
                 <span className="price-line">
                  <Image src={LinePrice} alt="strikethrough line" fill/>
                </span> 
              </del>
            </>
          ) : (
            <span>{priceCurrent}</span>
          )}
        </p>
      </div>
      <div className="title-wrapper">{productTitle}</div>
    </StyledProductCard>
  );
};

export default ProductCard;
