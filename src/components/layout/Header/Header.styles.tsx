import styled from 'styled-components';

export const StyledHeader = styled.header`
  & .container {
    padding-left: 43px;
    padding-right: 43px;
    padding-top: 39px;
    padding-bottom: 18px;
    color: green;
    display: flex;
    align-items: center;
		max-width: 1366px;
		width: 100%;
		justify-content: space-between;
		margin-left: auto;
		margin-right: auto;

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

			& .search_form-wrapper {
				width: 100%;
				margin-right: 43px;
			}

			& .login_links-wrapper {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap:50px;
			}

		}


		
  }
`;
