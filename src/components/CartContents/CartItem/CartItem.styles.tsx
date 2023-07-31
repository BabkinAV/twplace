import styled from 'styled-components';

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: flex-start;

  /* border: 1px solid blue; */

  margin-bottom: 26px;

  padding: 27px 27px 27px 16px;

	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);

	position: relative;


  & .cartItem__content-wrapper {
    flex: 1 1 auto;
		margin-right: 30px;
  }

  .cartItem__checkbox-wrapper {
		margin-right: 20px;
		@media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
			margin-right: 0px;
		}
		display: flex;
		flex-direction: column;
		justify-content: center;
  }

	.deleteButton__wrapper {
		position: absolute;
		bottom: 27px;
		right: 27px;
	}

`;
