import React from 'react';
import { StyledCartItemContent } from './CartItemContent.styles';
import { Product } from '../../../../types';
import Image from 'next/image';

const CartItemContent = ({
  className,
  productItem
}: {
  className: string;
	productItem: Product
	
}) => {
  return (
    <StyledCartItemContent className={className}>
      <Image src={productItem.imageLink} alt={`${productItem.title} image`}  width={100} height={100}/>
			<span>{productItem.title}</span>
    </StyledCartItemContent>
  );
};

export default CartItemContent;
