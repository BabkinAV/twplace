import { useLazyQuery } from '@apollo/client';
import Image from 'next/image';
import { MouseEventHandler, useId, useState } from 'react';
import { useCookies } from 'react-cookie';
import { modalIsShownVar } from '../../../cache/ModalISShown/modalIsShownVar';
import { isUserAuthenticatedVar } from '../../../cache/userIsAuthenticated/isUserAuthenticatedVar';
import { USER_LOGIN } from '../../../queries/authQueries';
import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';
import ButtonFilledLight from '../../UI/Buttons/ButtonFilledLight/ButtonFilledLight';
import EyeIcon from '../../assets/images/EyeIcon.svg';
import { StyledSignupForm } from './SignupForm.styles';

const SignupForm = ({
  onLoginButtonClick,
}: {
  onLoginButtonClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const [getLoginData, { loading, error, data }] = useLazyQuery<{
    signup: {
      token: string;
      userId: string;
    };
  }>(USER_LOGIN);

  //Hide/Show password https://dev.to/annaqharder/hideshow-password-in-react-513a

  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  const [cookies, setCookie] = useCookies(['token']);

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    getLoginData({
      variables: { email: target.email.value, password: target.password.value },
      onCompleted: ({ signup }) => {
        isUserAuthenticatedVar(true);
        modalIsShownVar(false);
        setCookie('token', signup.token, {
          path: '/',
          maxAge: 86400,
          sameSite: 'strict',
        });
      },
    });
  };

  return (
    <StyledSignupForm className="signup-form" onSubmit={formSubmissionHandler}>
      <h2 className="signup-form__header">Регистрация</h2>

      <div className="signup-form__container--inputs">
        <div className="signup-form__group">
          <label className="signup-form__label" htmlFor="signupEmail">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="signup-form__input"
            id="signupEmail"
            placeholder="Введите Email"
          />
        </div>
        <div className="signup-form__group">
          <label className="signup-form__label" htmlFor="signupPassword">
            Пароль
          </label>
          <input
            type={inputType}
            name="password"
            className="signup-form__input"
            id="signupPassword"
            placeholder="Введите пароль"
          />
          <Image
            src={EyeIcon}
            alt="Показать пароль"
            title="Показать пароль"
            className="input__icon"
            onClick={() =>
              setInputType(prevInputType =>
                prevInputType === 'text' ? 'password' : 'text'
              )
            }
          />
        </div>
        <div className="signup-form__group">
          <label className="signup-form__label" htmlFor="signupPasswordConfirmation">
            Подтвердите пароль
          </label>
          <input
            type={inputType}
            name="password"
            className="signup-form__input"
            id="signupPasswordConfirmation"
            placeholder="Подтвердите пароль"
          />
          <Image
            src={EyeIcon}
            alt="Показать пароль"
            title="Показать пароль"
            className="input__icon"
            onClick={() =>
              setInputType(prevInputType =>
                prevInputType === 'text' ? 'password' : 'text'
              )
            }
          />
        </div>
      </div>
      <div className="signup-form__container--buttons">
        {error && (
          <p className="signup-form__errors">
            Произошла ошибка ({error.message})
          </p>
        )}
        <ButtonFilled
          className="signup-form__button--dark"
          type="submit"
          loading={loading}
        >
          Зарегистрироваться
        </ButtonFilled>
        <p className="signup-form__text">Уже есть учетная запись?</p>
        <ButtonFilledLight
          className="signup-form__button--light"
          onClick={onLoginButtonClick}
					buttonType='button'
        >
          Войти
        </ButtonFilledLight>
      </div>
    </StyledSignupForm>
  );
};

export default SignupForm;
