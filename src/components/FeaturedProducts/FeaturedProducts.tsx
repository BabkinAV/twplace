import { ApolloError } from '@apollo/client';

import { Product } from '../../types';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import ProductGallery from '../layout/ProductGallery/ProductGallery';

const FeaturedProducts = ({
  loading,
  error,
  featuredProducts,
}: {
  loading: boolean;
  error?: ApolloError;
  featuredProducts?: Product[];
}) => {
  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {loading && <p>Загрузка...</p>}
        {!loading && !error && featuredProducts && (
          <ProductGallery productsArr={featuredProducts} />
        )}
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
