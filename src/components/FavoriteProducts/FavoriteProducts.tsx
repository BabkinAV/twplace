import { useReactiveVar } from '@apollo/client';


import ButtonOutlined from '../UI/Buttons/ButtonOutlined/ButtonOutlined';

import { useRouter } from 'next/router';
import { favoriteProductsVar } from '../../cache/favoriteProducts/favoriteProductsVar';
import ProductGallery from '../layout/ProductGallery/ProductGallery';
import { StyledFavoriteProducts } from './FavoriteProducts.styles';

const FavoriteProducts = () => {
  const router = useRouter();
	const favoriteProducts = useReactiveVar(favoriteProductsVar)
  return (
    <StyledFavoriteProducts>
      <h3 className="products__title">
        Ваши избранные продукты:
      </h3>
      <div className="products__gallery">
          <ProductGallery productsArr={favoriteProducts} />
      </div>
      <div className="products__go-back go-back">
        <ButtonOutlined
          className="go-back__btn"
          onClick={() => router.push('/')}
        >
          На главную
        </ButtonOutlined>
      </div>
    </StyledFavoriteProducts>
  );
};

export default FavoriteProducts;
