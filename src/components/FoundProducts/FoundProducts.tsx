import { ApolloError } from '@apollo/client';

import { Product } from '../../types';
import { StyledFoundProducts } from './FoundProducts.styles';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import ProductGallery from '../layout/ProductGallery/ProductGallery';

const FoundProducts = ({
  loading,
  error,
  featuredProducts,
}: {
  loading: boolean;
  error?: ApolloError;
  featuredProducts?: Product[];
}) => {
  return (
    <StyledFoundProducts>
      <h3 className="products__title">Найдено по запросу &quot;футболка&quot; :</h3>
      <div className="products__gallery">
        {loading && <p>Загрузка...</p>}
        {!loading && !error && featuredProducts && (
          <ProductGallery productsArr={featuredProducts} />
        )}
      </div>
      <div className="products__see-more">
        <ButtonOutlined className="products__see-more__btn">
          На главную
        </ButtonOutlined>
      </div>
    </StyledFoundProducts>
  );
};

export default FoundProducts;
