import { gql, useQuery } from '@apollo/client';
import { Product } from '../../types';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';

import ProductCard from '../ProductCard/ProductCard';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import { GET_PRODUCTS } from '../../queries/productQueries';



const FeaturedProducts = () => {
  const { loading, error, data } = useQuery<{ products: Product[] }>(
    GET_PRODUCTS
  );

  console.log(data);

  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {loading && <p>Загрузка...</p>}
        {!loading &&
          !error &&
          data?.products.map(product => (
            <ProductCard
              productImgLink={product.imageLink}
              productTitle={product.title}
              priceCurrent={product.price.priceCurrent}
              priceOld={product.price.priceOld}
              discount={product.price.discount}
              productId={product._id}
              key={product._id}
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
