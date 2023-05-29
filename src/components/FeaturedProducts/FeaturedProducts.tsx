import { Product } from '../../types';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';

import ProductCard from '../ProductCard/ProductCard';

import featuredProductsData from '../../../data/dummyFeaturedProductsList.json';
import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

const featuredProductsArr = featuredProductsData as Product[];

const FeaturedProducts = () => {
  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {featuredProductsArr.map(product => (
          <ProductCard
            productImgLink={product.imageLink}
            productTitle={product.title}
            priceCurrent={product.price.priceCurrent}
            priceOld={product.price.priceOld}
            discount={product.price.discount}
            productId={product.id}
            key={product.id}
          />
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
