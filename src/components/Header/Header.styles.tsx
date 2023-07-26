import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 39px;
  padding-bottom: 18px;

	display: grid;
	max-width: 1366px;
	gap: 20px;

	grid-template-columns: 296px 1fr min-content;

	& .column-left {
		display: flex;
    flex: 1 0 auto;
	}




    /* display: flex;
    align-items: center;
    max-width: 1366px;

    width: 100%;
    justify-content: space-between;
		gap: 20px;
 

	& .column-left {
    display: flex;
    max-width: 296px;
    flex: 1 0 auto;
  }

  & .column-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
    gap: 10px;
  } */

  & .search_form-wrapper {
    width: 100%;
    margin-right: 43px;
		order: 1;
  }

  & .login_links-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
		order: 2;
    gap: 50px;
    .login__button,
    .logout__button {
      background: 0;
      border: 0;
      padding: 0;
    }
  }

  .logo__link {
    /* display: flex; */
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    & .search_form-wrapper {
      margin-right: 20px;
    }
    & .login_links-wrapper {
      gap: 15px;
    }
  }

	@media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
		& .search_form-wrapper {
			order: 2;
			grid-column: 1/-1;
		}

		& .login_links-wrapper {
			order: 1;
			justify-content: flex-end;
		}

	}

	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
		& .login_links-wrapper {
			grid-column: 1/-1;
			justify-content: space-between;
		}
	}

`;
