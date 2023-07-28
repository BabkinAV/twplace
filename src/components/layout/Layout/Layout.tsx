import { ReactNode, } from 'react';
import Header from '../../Header/Header';
import LoginForm from '../../forms/LoginForm/LoginForm';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { StyledLayout } from './Layout.styles';


const Layout = ({ children }: { children?: ReactNode }) => {


	
  return (
    <StyledLayout className="layout">
      <Modal>
				<LoginForm />
      </Modal>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      {/* <Footer /> */}
    </StyledLayout>
  );
};

export default Layout;
