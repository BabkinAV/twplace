import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${props => props.theme.palette.gradients.backgroundGradient};
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
	margin-top: auto;

  & .footer__content {
    display: flex;

    .footer__links {
      flex-grow: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .footer__form-wrap {
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

    .footer__form {
      margin-bottom: 22px;
    }

    .footer__heading {
      margin-bottom: 20px;
    }

    .footer__icons-wrap {
      display: flex;
      justify-content: space-between;

      .footer__social-list {
        display: flex;

        .footer__social-item {
          margin-right: 33px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
