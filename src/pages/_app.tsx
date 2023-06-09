import { ApolloClient, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from '../../store/context/cartContext';
import { cache } from '../cache/cache';
import Layout from '../components/layout/Layout/Layout';
import { defaultTheme } from '../components/themes/defaultTheme';
import '../styles/reset.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_ADDRESS,
  cache,
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
		
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>TWplace</title>
        <meta name="description" content="TwPlace e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={defaultTheme}>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
