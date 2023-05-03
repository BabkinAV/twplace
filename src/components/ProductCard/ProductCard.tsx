import React from 'react';
import Image from 'next/image';

import { StyledProductCard } from './ProductCard.styles';

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
      <div className="product-card__image-wrapper">
        <Image
          src={productImgLink}
          width={160}
          height={160}
          alt={productTitle}
        />
				<span>{discount}</span>
      </div>
      <div className="product-card__price-wrapper">
        <p className="product-card__price">
          <ins>{priceCurrent} ₽</ins>
        </p>
      </div>
			<div className='product-card__title-wrapper'>
				{productTitle}
			</div>
    </StyledProductCard>
  );
};

export default ProductCard;
