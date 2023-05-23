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

  .cartItem__prices {
    display: flex;
    flex-direction: column;
  }
`;
