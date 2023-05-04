import React from 'react';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';
import Image from 'next/image';
import { Product } from '../../types';

import ProductCard from '../ProductCard/ProductCard';

import featuredProductsData from '../../../data/dummyFeaturedProductsList.json';

const featuredProductsArr: Product[] = featuredProductsData;

const FeaturedProducts = () => {
  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {featuredProductsArr.slice(0, 6).map(product => (
          <ProductCard
            key={product.id}
            productImgLink={product.imageLink}
            productTitle={product.title}
            priceCurrent={product.price.priceCurrent}
						priceOld={product.price.priceOld}
						
          />
        ))}
      </div>
    </StyledFeaturedProducts>
  );
};

export default FeaturedProducts;
