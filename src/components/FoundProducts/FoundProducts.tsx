import { ApolloError } from '@apollo/client';

import { Product } from '../../types';
import { StyledFoundProducts } from './FoundProducts.styles';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import ProductGallery from '../layout/ProductGallery/ProductGallery';
import { useRouter } from 'next/router';
import Spinner from '../UI/Spinner/Spinner';

const FoundProducts = ({
  loading,
  error,
  featuredProducts,
  searchStr,
}: {
  loading: boolean;
  error?: ApolloError;
  featuredProducts?: Product[];
  searchStr: string;
}) => {
  const router = useRouter();
  return (
    <StyledFoundProducts>
      <h3 className="products__title">
        Найдено товаров по запросу &quot;{searchStr}&quot; :
      </h3>
      <div className="products__gallery">
        {loading && <Spinner fill='black'/>}
        {!loading && !error && featuredProducts && (
          <ProductGallery productsArr={featuredProducts} />
        )}
      </div>
      <div className="products__see-more">
        <ButtonOutlined
          className="products__see-more__btn"
          onClick={() => router.push('/')}
        >
          На главную
        </ButtonOutlined>
      </div>
    </StyledFoundProducts>
  );
};

export default FoundProducts;
