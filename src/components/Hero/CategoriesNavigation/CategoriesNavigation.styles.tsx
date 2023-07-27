import styled from 'styled-components';

import ThreeDotsIcon from '../../assets/images/ThreeDotsIcon.svg';

export const StyledCategoriesNavigation = styled.nav`
  flex: 1 0 auto;

  .nav__header {
    padding: 10px 80px 10px 60px;
    background: ${props => props.theme.palette.gradients.backgroundGradient};
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    & .nav__link {
      position: relative;
    }

    & .nav__link::before {
      content: url(${ThreeDotsIcon.src});
      position: absolute;
      left: -19px;
      top: -1px;
    }
  }

  .nav__body {
    padding-top: 12.5px;
    padding-bottom: 12.5px;
    padding-left: 62px;

    .nav__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 13px;

      @media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
				gap: 7px
      }

      .nav__link {
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: -32px;
          transform: translateY(-50%);
        }

        span {
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 16px;
        }

        &:hover span {
          font-weight: 700;
        }
      }
    }
  }
`;
