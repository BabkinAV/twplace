import styled from 'styled-components';

export const StyledSubtotal = styled.div`
  padding: 10px 18px 15px;
	box-shadow:  ${props => props.theme.palette.shadows.borderShadow};

	border-radius: 5px;

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
		max-width: 280px;
    margin: 0 auto;
	}

	.subtotal__button {
		width: 100%;
		padding-top: 17px;
		padding-bottom: 17px;
	}

	.subtotal__error-text{
		padding-top: 10px;
		color: red;
		display: flex;
		justify-content: center;
	}


`;
