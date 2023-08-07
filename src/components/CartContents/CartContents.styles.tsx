import styled from 'styled-components';

export const StyledCartContents = styled.div`
  .cart__header {
    margin-bottom: 30px;
  }
  .select-all {
    &__checkbox {
      margin-left: 16px;
    }
    margin-bottom: 30px;
  }
  .cart__contents {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding-bottom: 20px;
    gap: 70px;
    @media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
      gap: 40px;
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  .order-confirmation {
    margin-top: 100px;
		margin-bottom: 100px;

		display: flex;
		flex-direction: column;
		align-items: center;
    &__text {
      text-align: center;
    }
		&__wrapper {
			margin-top: 20px;
		}
		&__button {
			min-width: max-content;
			padding: 20px 50px;
		}

  }
`;
