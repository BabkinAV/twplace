import React from 'react';
import { StyledFooter } from './Footer.styles';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__links">Footer links</div>
          <div className="footer__form">Footer form</div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
