import React, { ReactNode } from 'react';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

const Layout = ({ children }: { children?: ReactNode }) => {
  // TODO: consider dropping Container element and move all styles to Layout element
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
