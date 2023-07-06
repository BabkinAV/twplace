import { ReactNode } from 'react';
import Header from '../../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { StyledLayout } from './Layout.styles';
import LoginForm from '../../forms/LoginForm/LoginForm';

const Layout = ({ children }: { children?: ReactNode }) => {
  // TODO: consider dropping Container element and move all styles to Layout element
  return (
    <StyledLayout className="layout">
      <Modal>
				<LoginForm />
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
