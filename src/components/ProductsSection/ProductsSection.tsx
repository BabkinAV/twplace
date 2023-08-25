import { ApolloError } from '@apollo/client';

import { Product } from '../../types';
import { StyledProductsSection } from './ProductsSection.styles';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import ProductGallery from '../layout/ProductGallery/ProductGallery';
import Spinner from '../UI/Spinner/Spinner';

const ProductsSection = ({
  loading,
  error,
  featuredProducts,
	title
}: {
  loading: boolean;
  error?: ApolloError;
  featuredProducts?: Product[];
	title: string;
}) => {
  return (
    <StyledProductsSection>
      <h3 className="products__title">{title}</h3>
      <div className="products__gallery">
        {loading && <Spinner fill='black'/>}
        {!loading && !error && featuredProducts && (
          <ProductGallery productsArr={featuredProducts} />
        )}
      </div>
      <div className="products__see-more">
        <ButtonOutlined className="products__see-more__btn">
          Все товары
        </ButtonOutlined>
      </div>
    </StyledProductsSection>
  );
};

export default ProductsSection;
