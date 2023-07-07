import { useId } from 'react';
import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';
import ButtonFilledLight from '../../UI/Buttons/ButtonFilledLight/ButtonFilledLight';
import { StyledLoginForm } from './LoginForm.styles';

const LoginForm = () => {
  // Providing unique label ids for the inputs: https://react.dev/reference/react-dom/components/input#providing-a-label-for-an-input
  const emailInputId = useId();
  const passwordInputId = useId();

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
            type="password"
            name="password"
            className="login-form__input"
            id={passwordInputId}
            placeholder="Введите пароль"
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
