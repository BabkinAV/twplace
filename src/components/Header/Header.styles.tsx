import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 39px;
  padding-bottom: 18px;

  display: grid;
  gap: 20px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    gap: 0;
    row-gap: 20px;
  }

  grid-template-columns: 296px 1fr min-content;

  & .logo-wrapper {
    display: flex;
    flex: 1 0 auto;
  }

  & .search_form-wrapper {
    width: 100%;
    order: 1;
    align-self: center;
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

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    & .login_links-wrapper {
      grid-column: 1/-1;
      justify-content: space-between;
    }
    & .logo-wrapper {
      grid-column: 1/-1;
    }
  }

  .header__link,
  .login__button {
    /* Apply focus styles */
    &:focus-visible,
    &:focus {
      outline: 2px solid black		;
    }

    /* Remove the focus outline */
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;
