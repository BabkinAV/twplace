import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${props => props.theme.palette.backgroundGradient};
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;

  & .footer__content {
    display: flex;

    .footer__links {
      border: 1px solid yellow;
      flex-grow: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .footer__form-wrap {
      border: 1px solid orange;
      min-width: 400px;
    }

    .footer__list-wrap {
			margin-top: 5px;
      .footer__heading {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
      .footer__item {
        font-weight: 400;
        font-size: 14px;
        line-height: 27px;
      }
    }
  }
`;
