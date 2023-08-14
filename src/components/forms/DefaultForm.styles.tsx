import styled from 'styled-components';

export const Form = styled.form`
  .login-form,
	.signup-form {
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
        max-width: 400px;
        margin: 0 auto;
        padding-right: 18px;
      }
      &--buttons {
        position: relative;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 44px;
      }
    }

    &__group {
      display: grid;
      grid-template-columns: 100px 300px;
      margin-bottom: 22px;
      align-items: center;
      position: relative;

      .login-form__label,
			.signup-form__label {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      .login-form__input,
			.signup-form__input {
        flex: 1;
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
        right: -5px;
        bottom: 7px;
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
        min-width: 200px;
      }

      &--light {
        padding: 6px 7px;
      }
    }
    &__errors {
      color: ${props => props.theme.palette.colors.red100};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      top: 0;
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
		.login-form,
		.signup-form {
			&__container {
				&--inputs {
					padding-right: 0;
					.login-form__input,
					.signup-form__input  {
						width: 100%;
						margin-top: 15px;
					}
				}
			}
			&__group {
				display: flex;
				flex-direction: column;

				.input__icon {
					right: 5px;
				}
			}
			
		}
  }
`;
