import React from 'react';
import { StyledFormFooter } from './FormFooter.styles';
import ButtonFooter from './ButtonFooter/ButtonFooter';

const FormFooter = () => {
  return (
    <StyledFormFooter className="form footer__form">
      <p className="form__paragraph">
        Хотите быть в курсе последних новостей и акций?
      </p>
      <div className="form__section">
        <input
          type="email"
          className="form__input"
          placeholder="alexeyivanov@gmail.com"
        />
        <ButtonFooter />
      </div>
    </StyledFormFooter>
  );
};

export default FormFooter;
