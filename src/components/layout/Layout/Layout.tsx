import { ReactNode, useState } from 'react';
import Header from '../../Header/Header';
import LoginForm from '../../forms/LoginForm/LoginForm';

import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { StyledLayout } from './Layout.styles';
import SignupForm from '../../forms/SignupForm/SignupForm';

const Layout = ({ children }: { children?: ReactNode }) => {
  const [isSignupForm, setIsSignupForm] = useState<Boolean>(false);

  return (
    <StyledLayout className="layout">
      <Modal>
        {isSignupForm ? (
          <SignupForm onLoginButtonClick={() => setIsSignupForm(false)}/>
        ) : (
          <LoginForm onSignupButtonClick={() => setIsSignupForm(true)} />
        )}
      </Modal>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
