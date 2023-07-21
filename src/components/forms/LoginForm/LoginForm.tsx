import { useLazyQuery } from '@apollo/client';
import Image from 'next/image';
import { useId, useState } from 'react';
import { useCookies } from 'react-cookie';
import { modalIsShownVar } from '../../../cache/ModalISShown/modalIsShownVar';
import { isUserAuthenticatedVar } from '../../../cache/userIsAuthenticated/isUserAuthenticatedVar';
import { USER_LOGIN } from '../../../queries/authQueries';
import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';
import ButtonFilledLight from '../../UI/Buttons/ButtonFilledLight/ButtonFilledLight';
import EyeIcon from '../../assets/images/EyeIcon.svg';
import { StyledLoginForm } from './LoginForm.styles';

const LoginForm = () => {
  // Providing unique label ids for the inputs: https://react.dev/reference/react-dom/components/input#providing-a-label-for-an-input
  const emailInputId = useId();
  const passwordInputId = useId();
  const [getLoginData, { loading, error, data }] = useLazyQuery<{
    login: {
      token: string;
      userId: string;
    };
  }>(USER_LOGIN);

  //Hide/Show password https://dev.to/annaqharder/hideshow-password-in-react-513a

  const [inputType, setInputType] = useState<'password' | 'text'>('password');
	const [cookies, setCookie] = useCookies(['token'])

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    getLoginData({
      variables: { email: target.email.value, password: target.password.value },
      onCompleted: ({ login }) => {
        isUserAuthenticatedVar(true);
        modalIsShownVar(false);
				setCookie('token', login.token, {path: '/', maxAge: 3600})
      },
    });
  };


  return (
    <StyledLoginForm className="login-form" onSubmit={formSubmissionHandler}>
      <h2 className="login-form__header">Вход</h2>

      <div className="login-form__container--inputs">
        <div className="login-form__group">
          <label className="login-form__label" htmlFor={emailInputId}>
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="login-form__input"
            id={emailInputId}
            placeholder="Введите Email"
          />
        </div>
        <div className="login-form__group">
          <label className="login-form__label" htmlFor={passwordInputId}>
            Пароль
          </label>
          <input
            type={inputType}
            name="password"
            className="login-form__input"
            id={passwordInputId}
            placeholder="Введите пароль"
          />
          <Image
            src={EyeIcon}
            alt="Показать пароль"
            title="Показать пароль"
            className="input__icon"
            onClick={() => setInputType('text')}
          />
        </div>
      </div>
      <div className="login-form__container--buttons">
        {error && (
          <p className="login-form__errors">
            Произошла ошибка ({error.message})
          </p>
        )}
        <ButtonFilled className="login-form__button--dark" type="submit">
          Войти
        </ButtonFilled>
        <p className="login-form__text">Забыли пароль?</p>
        <ButtonFilledLight className="login-form__button--light">
          Зарегистрироваться
        </ButtonFilledLight>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
