import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  .login-form {
    &__header {
      text-align: center;
      color: #000;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 30px;
			margin-top: 31px;
    }
    &__container {
      &--inputs {
        margin-left: 90px;
        margin-right: 148px;
        padding-left: 18px;
      }
      &--buttons {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
				margin-bottom: 44px;
      }
    }

    &__group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 22px;
      align-items: center;
			position: relative;

      .login-form__label {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      .login-form__input {
        flex: 1;
        max-width: 296px;
        height: 28px;
        font-size: 14px;
        font-style: normal;
        line-height: normal;
        border-radius: 4px;
				padding: 6px 10px;
        border: 1px solid ${props => props.theme.palette.colors.grey100};
				font-weight: 400;
        &::placeholder {
          font-weight: 300;
        }
      }
			.input__icon {
				position: absolute;
				right: 5px;
				top: 50%;
				transform: translateY(-50%);
				cursor: pointer;
			}
    }

    &__text {
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 124.188%;
      margin-bottom: 14px;
    }

    &__button {
      &--dark {
        padding: 14px 74px;
        margin-bottom: 47px;
      }

      &--light {
        padding: 6px 7px;
      }
    }
  }
`;
