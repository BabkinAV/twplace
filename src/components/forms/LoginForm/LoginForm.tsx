import Image from 'next/image';
import { useId, useState } from 'react';
import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';
import ButtonFilledLight from '../../UI/Buttons/ButtonFilledLight/ButtonFilledLight';
import { StyledLoginForm } from './LoginForm.styles';
import EyeIcon from '../../assets/images/EyeIcon.svg';

const LoginForm = () => {
  // Providing unique label ids for the inputs: https://react.dev/reference/react-dom/components/input#providing-a-label-for-an-input
  const emailInputId = useId();
  const passwordInputId = useId();

  //Hide/Show password https://dev.to/annaqharder/hideshow-password-in-react-513a

  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  return (
    <StyledLoginForm className="login-form">
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
        <ButtonFilled className="login-form__button--dark">Войти</ButtonFilled>
        <p className="login-form__text">Забыли пароль?</p>
        <ButtonFilledLight className="login-form__button--light">
          Зарегистрироваться
        </ButtonFilledLight>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
