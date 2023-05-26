import styled from 'styled-components';

export const StyledCartItemContent = styled.div`
  display: flex;
  width: 100%;
  .cartItem__heading {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
		margin-bottom: 10px;
  }
  .cartItem__text {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  .cartItem__image-wrapper {
    margin-right: 38px;
		width: 100px;
  }
  .cartItem__title-wrapper {
    max-width: 150px;
  }
	.cartItem__title-wrapper,
  .cartItem__color-wrapper,
  .cartItem__size-wrapper,
  .cartItem__quantity-wrapper {
    margin-right: 50px;
  }

  .cartItem__price {
    display: flex;
    flex-direction: column;
		align-items: flex-start;
		ins {
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
      del {
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: ${props => props.theme.palette.colors.grey100};

        position: relative;

        .price-line {
          position: absolute;
          top: 0;
          left: 0;
          display: inline-block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
  }
`;
