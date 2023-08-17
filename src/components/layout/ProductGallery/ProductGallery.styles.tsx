import styled from 'styled-components';

export const StyledProductGallery = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(6, 180px);
  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
    grid-template-columns: repeat(4, 180px);
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-columns: repeat(auto-fit, 180px);
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    justify-content: center;
  }

  justify-content: space-between;
  gap: 26px;
`;
