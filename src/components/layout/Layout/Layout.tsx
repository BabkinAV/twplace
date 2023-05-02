import React, { ReactNode } from 'react';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
