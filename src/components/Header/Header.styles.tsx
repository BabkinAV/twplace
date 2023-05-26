import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 39px;
  padding-bottom: 18px;

  & .search_form-wrapper {
    width: 100%;
    margin-right: 43px;
  }

  & .login_links-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

	.logo__link {
		display: flex;
	}
`;
