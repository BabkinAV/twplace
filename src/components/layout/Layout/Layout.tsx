import { ReactNode } from 'react';
import Header from '../../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import ModalLogin from '../Modal/ModalLogin/ModalLogin';
import { StyledLayout } from './Layout.styles';


const Layout = ({ children }: { children?: ReactNode }) => {
  // TODO: consider dropping Container element and move all styles to Layout element
  return (
    <StyledLayout className='layout' >
			<ModalLogin />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
