import { useQuery } from '@apollo/client';

import { Product } from '../../types';
import { StyledFeaturedProducts } from './FeaturedProducts.styles';

import ProductCard from '../ProductCard/ProductCard';

import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import { GET_FEATURED_PRODUCTS } from '../../queries/productQueries';
import { addToCartProducts } from '../../cache/cartProducts/cartProductsVar';

const FeaturedProducts = () => {
  const { loading, error, data } = useQuery<{ featuredProducts: Product[] }>(
    GET_FEATURED_PRODUCTS
  );

  return (
    <StyledFeaturedProducts>
      <h3 className="products__title">Успей купить</h3>
      <div className="products__gallery">
        {loading && <p>Загрузка...</p>}
        {!loading &&
          !error &&
          data?.featuredProducts.map(product => (
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
