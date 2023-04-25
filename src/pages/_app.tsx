import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/themes/defaultTheme';
import Layout from '../components/layout/Layout/Layout';
import { Roboto } from 'next/font/google';
import '../styles/reset.css';

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
