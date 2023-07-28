import styled from 'styled-components';

export const StyledFormFooter = styled.form`
  & .form__paragraph {
    margin-bottom: 22px;
  }

  & .form__section {
    display: flex;
    align-items: stretch;

    .form__input {
      width: 260px;
      background: transparent;
      border: 1px solid #fff;
      margin-right: 15px;
      color: #fff;

      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 26px;
      padding-left: 24px;

      &:active {
        outline: none;
      }

      &:focus-visible,
      &:focus {
        outline: 1px solid blue;
      }

      /* Remove the focus outline */
      &:focus:not(:focus-visible) {
        outline: none;
      }

      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 0.65; /* Firefox */
      }
			@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
				width: 100%;
			}
    }
  }
`;
