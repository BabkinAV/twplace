import styled from 'styled-components';

export const StyledOrderItem = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
  padding: 20px 90px;
	@media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
			padding-left: 20px;
			padding-right: 20px;
		}
  .order__heading {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
  }

  .order__date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
		white-space: nowrap;
		
  }
  .product__list {
    margin-top: 20px;

    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 124.188%;
  }

  .product__item {
    display: grid;
    grid-template-columns: min-content minmax(min-content, 4fr) repeat(
        5,
        minmax(min-content, 1fr)
      );
    align-items: center;
    font-size: 14px;
    gap: 20px;
		
  }

	.product__item + .product__item {
    margin-top: 20px;
  }


	
 
  .order__total {
    text-align: right;
		font-size: 16px;
		font-weight: 300;


    .order__price {
      font-weight: 500;
			margin-left: 30px;
    }
  }

  .product__image {
    width: 80px;
  }

  .product__size,
  .product__color,
  .product__quantity,
  .product__price {
    justify-self: center;
  }


	@media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
		.product__item {
			grid-template-columns: min-content minmax(min-content, 4fr) repeat(
        3,
        minmax(min-content, 1fr)
      );
		}

		.product__item + .product__item {
    margin-top: 60px;
  }

		.product__title {
			grid-column: 2 / -1;
		}

		.product__list {
			margin-bottom: 50px;
		}

		.order__total {
			display: flex;
			justify-content: center;
		}


	}





`;
