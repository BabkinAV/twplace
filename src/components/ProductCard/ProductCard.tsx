import { useReactiveVar } from '@apollo/client';

import Image from 'next/image';

import { StyledProductCard } from './ProductCard.styles';

import { toast } from 'react-toastify';
import {
	addToFavoriteProducts,
	deleteFromFavoriteProducts,
	favoriteProductsVar,
} from '../../cache/favoriteProducts/favoriteProductsVar';
import { Product } from '../../types';
import ButtonFilled from '../UI/Buttons/ButtonFilled/ButtonFilled';
import HeartIconFilled from '../assets/images/HeartIcon.svg';
import HeartIconOutlined from '../assets/images/HeartIconOutlined.svg';
import LinePrice from '../assets/images/LinePrice.svg';
import TrashIcon from '../assets/images/TrashIcon.svg';

const ProductCard = ({
  product,
  onAddToCartClick,
}: {
  product: Product;
  onAddToCartClick: () => void;
}) => {
  const favoriteProducts = useReactiveVar(favoriteProductsVar);

  const isFavoriteProduct = favoriteProducts.some(
    favoriteProduct => favoriteProduct._id === product._id
  );

  const handleHeartButtonClick = () => {
    if (isFavoriteProduct) {
      deleteFromFavoriteProducts(product._id);
			toast.success('Товар удален из избранных', {
        icon: (
          <Image
            src={TrashIcon}
            alt="Trash Icon"
            style={{ height: 'auto' }}
          />
        ),
      });
    } else {
      addToFavoriteProducts(product);
      toast.success('Товар добавлен в избранное', {
        icon: (
          <Image
            src={HeartIconOutlined}
            alt="Heart Icon"
            style={{ height: 'auto' }}
          />
        ),
      });
    }
  };

  return (
    <StyledProductCard>
      <button className="add-favorite__button" onClick={handleHeartButtonClick}>
        <Image
          src={isFavoriteProduct ? HeartIconFilled : HeartIconOutlined}
          alt="add to favourite"
          className="add-favorite__image"
        />
      </button>
      <div className="image-wrapper">
        {product.price.discount && (
          <div className="discount-wrapper">
            <p className="product-discount">-{product.price.discount}%</p>
          </div>
        )}
        <Image
          src={process.env.NEXT_PUBLIC_STATIC_ADDRESS + product.imageLink}
          width={160}
          height={160}
          alt={product.title}
        />
      </div>
      <div className="price-wrapper">
        <p className="price">
          {product.price.priceOld ? (
            <>
              <ins>{product.price.priceCurrent} ₽</ins>
              <del>
                {product.price.priceOld} ₽
                <span className="price-line">
                  <Image src={LinePrice} alt="strikethrough line" fill />
                </span>
              </del>
            </>
          ) : (
            <span>{product.price.priceCurrent} ₽</span>
          )}
        </p>
      </div>
      <div className="title-wrapper">{product.title}</div>
      <div className="button-wrapper">
        <ButtonFilled
          onClick={onAddToCartClick}
          className="product-card__button"
        >
          В корзину
        </ButtonFilled>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
