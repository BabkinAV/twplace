import React, { ReactNode } from 'react';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import { StyledLayout } from './Layout.styles';


const Layout = ({ children }: { children?: ReactNode }) => {
  // TODO: consider dropping Container element and move all styles to Layout element
  return (
    <StyledLayout className='layout' >
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
