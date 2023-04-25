import styled from 'styled-components';

export const StyledCategoriesNavigaion = styled.nav`
  flex: 1 0 auto;

  & .nav__header {
    padding: 10px 80px 10px 60px;
    background: ${props => props.theme.palette.backgroundGradient};
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;
