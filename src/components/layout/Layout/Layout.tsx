import { useReactiveVar } from '@apollo/client';
import { ReactNode, useEffect } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import { isUserAuthenticatedVar } from '../../../cache/userIsAuthenticated/isUserAuthenticatedVar';
import Header from '../../Header/Header';
import LoginForm from '../../forms/LoginForm/LoginForm';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { StyledLayout } from './Layout.styles';
import jwtDecode from 'jwt-decode';

const Layout = ({ children }: { children?: ReactNode }) => {

	const [cookies] = useCookies(['token']);
	useEffect(() => {
		if (cookies.token) {
			const decodedToken = jwtDecode<{userId: string, email: string, iat: number, exp: number}>(cookies.token);
			isUserAuthenticatedVar(true);
			if (decodedToken.exp *1000 > Date.now()) {
				isUserAuthenticatedVar(true);
			} else {
				isUserAuthenticatedVar(false);
			}
		}
		
	
	}, [cookies.token])
	 
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
