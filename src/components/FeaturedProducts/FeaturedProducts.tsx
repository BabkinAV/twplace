import React from 'react';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';
import Image from 'next/image';
import { Product } from '../../types';

import ProductCard from '../ProductCard/ProductCard';

import featuredProductsData from '../../../data/dummyFeaturedProductsList.json';
import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';
import Link from 'next/link';

const featuredProductsArr: Product[] = featuredProductsData;

const FeaturedProducts = () => {
  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {featuredProductsArr.map(product => (
          <Link href="#" key={product.id}>
            <ProductCard
              productImgLink={product.imageLink}
              productTitle={product.title}
              priceCurrent={product.price.priceCurrent}
              priceOld={product.price.priceOld}
              discount={product.price.discount}
            />
          </Link>
        ))}
      </div>
      <div className="products__see-more">
        <ButtonOutlined className="products__see-more__btn">
          Все товары
        </ButtonOutlined>
      </div>
    </StyledFeaturedProducts>
  );
};

export default FeaturedProducts;
