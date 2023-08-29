import React from 'react';
import { Product } from '../../../types';
import ProductCard from '../../ProductCard/ProductCard';
import { addToCartProducts } from '../../../cache/cartProducts/cartProductsVar';
import { StyledProductGallery } from './ProductGallery.styles';
import { toast } from 'react-toastify';
import Image from 'next/image';
import CheckIconBlue from '../../assets/images/checkIconBlue.svg';

const ProductGallery = ({ productsArr }: { productsArr: Product[] }) => {
  const handleAddToCartClick = (product: Product) => {
    addToCartProducts(product);
    toast.success('Товар добавлен в корзину', {
      icon: (
        <Image
          src={CheckIconBlue}
          alt="Check Icon"
          style={{ height: 'auto' }}
        />
      ),
    });
  };
  return (
    <StyledProductGallery className="products__gallery">
      {productsArr.map(product => (
        <ProductCard
          product={product}
          key={product._id}
          onAddToCartClick={() => handleAddToCartClick(product)}
        />
      ))}
    </StyledProductGallery>
  );
};

export default ProductGallery;
