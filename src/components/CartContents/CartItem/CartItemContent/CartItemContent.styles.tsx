import styled from 'styled-components';

export const StyledCartItemContent = styled.div`
  /* display: flex; */
	display: grid;
	grid-template-columns: min-content minmax(min-content, 2fr) repeat(4, minmax(min-content, 1fr));
	@media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
		grid-template-columns: repeat(4, minmax(min-content, 1fr));
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
		grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 2fr)
	}
	
	gap: 20px;

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
    margin-right: 18px;
    width: 100px;
		@media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
			margin-right: 0px;	
		}
  }
  .cartItem__title-wrapper {
    max-width: 150px;
		@media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
			max-width: unset;
			grid-column: 2 / -1;
		}
  }

	.cartItem__price-wrapper {
		margin-left: 16px;
		@media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
			margin-left: 0px;
		}
	}

  .cartItem__price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ins {
      text-decoration: none;
			white-space: nowrap; 
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    del {
      text-decoration: none;
			white-space: nowrap; 
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
    .price__default {
      text-decoration: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
