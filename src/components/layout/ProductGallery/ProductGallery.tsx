import React from 'react';
import { Product } from '../../../types';
import ProductCard from '../../ProductCard/ProductCard';
import { addToCartProducts } from '../../../cache/cartProducts/cartProductsVar';
import { StyledProductGallery } from './ProductGallery.styles';

const ProductGallery = ({ productsArr }: { productsArr: Product[] }) => {
  return (
    <StyledProductGallery className="products__gallery">
      {productsArr.map(product => (
        <ProductCard
          productImgLink={product.imageLink}
          productTitle={product.title}
          priceCurrent={product.price.priceCurrent}
          priceOld={product.price.priceOld}
          discount={product.price.discount}
          productId={product._id}
          key={product._id}
          onAddToCartClick={() => addToCartProducts(product)}
        />
      ))}
    </StyledProductGallery>
  );
};

export default ProductGallery;
