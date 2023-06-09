import Image from 'next/image';

import { StyledProductCard } from './ProductCard.styles';

import LinePrice from '../assets/images/LinePrice.svg';
import ButtonFilled from '../UI/Buttons/ButtonFilled/ButtonFilled';

const ProductCard = ({
  productImgLink,
  productTitle,
  priceCurrent,
  priceOld,
  discount,
  productId,
	onAddToCartClick
}: {
  productImgLink: string;
  productTitle: string;
  priceCurrent: number;
  priceOld?: number;
  discount?: number;
  productId: string;
  onAddToCartClick: () => void;
}) => {
  // const { addCartProduct } = useCart();
  return (
    <StyledProductCard>
      <div className="image-wrapper">
        {discount && (
          <div className="discount-wrapper">
            <p className="product-discount">-{discount}%</p>
          </div>
        )}
        <Image
          src={productImgLink}
          width={160}
          height={160}
          alt={productTitle}
        />
      </div>
      <div className="price-wrapper">
        <p className="price">
          {priceOld ? (
            <>
              <ins>{priceCurrent} ₽</ins>
              <del>
                {priceOld} ₽
                <span className="price-line">
                  <Image src={LinePrice} alt="strikethrough line" fill />
                </span>
              </del>
            </>
          ) : (
            <span>{priceCurrent} ₽</span>
          )}
        </p>
      </div>
      <div className="title-wrapper">{productTitle}</div>
      <div className="button-wrapper">
        <ButtonFilled onClick={onAddToCartClick} className='product-card__button'>
          В корзину
        </ButtonFilled>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
