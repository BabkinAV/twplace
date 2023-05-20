import styled from 'styled-components';

export const StyledSubtotal = styled.div`
  padding: 10px 18px;

  .subtotal__item,
  .subtotal__heading {
    display: flex;
    justify-content: space-between;
  }

	.subtotal__list {

		margin-bottom: 20px;

		.subtotal__item {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 190%;
			.subtitle__text {
				&--underlined {
					text-decoration: underline;
				}
			}
		}
	}


  .subtotal__heading {
    font-size: 16px;
    line-height: 190%;

    .subtitle__text {
      font-weight: 400;
    }

    .subtitle__text--bold {
      font-weight: 700;
    }
  }

	.subtotal__button--wrapper {
		height: 50px;
	}


`;
