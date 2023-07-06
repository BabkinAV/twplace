import ButtonFilled from '../../UI/Buttons/ButtonFilled/ButtonFilled';
import { StyledLoginForm } from './LoginForm.styles';

const LoginForm = () => {
  return (
    <StyledLoginForm className="login-form">
      <h2 className="login-form__header">Вход</h2>

      <div className="login-form__container">
        <div className="login-form__group">
          <label className="login-form__label">
            E-mail
            <input type="email" name="email" className="login-form__input" />
          </label>
        </div>
        <div className="login-form__group">
          <label className="login-form__label">
						Password
            <input
              type="password"
              name="password"
              className="login-form__input"
            />
          </label>
        </div>
				<div className='login-form__container'>
					<ButtonFilled className="login-form__button">
						Войти
					</ButtonFilled>
					
				</div>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
