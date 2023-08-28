import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import jwtDecode from 'jwt-decode';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import { schema } from '../cache/cache';
import { isUserAuthenticatedVar } from '../cache/userIsAuthenticated/isUserAuthenticatedVar';
import Layout from '../components/layout/Layout/Layout';
import '../styles/reset.css';
import { defaultTheme } from '../themes/defaultTheme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_ADDRESS,
  cache: new InMemoryCache(schema),
});

export default function App({ Component, pageProps }: AppProps) {
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    if (cookies.token) {
      const decodedToken = jwtDecode<{
        userId: string;
        email: string;
        iat: number;
        exp: number;
      }>(cookies.token);
      isUserAuthenticatedVar(true);
      if (decodedToken.exp * 1000 > Date.now()) {
        isUserAuthenticatedVar(true);
      } else {
        isUserAuthenticatedVar(false);
      }
    }
  }, [cookies.token]);
  // const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  // const [persistor, setPersistor] =
  //   useState<CachePersistor<NormalizedCacheObject>>();
  // useEffect(() => {
  //   async function init() {
  //     const cache = new InMemoryCache(schema);
  // 		let newPersistor = new CachePersistor({
  //       cache,
  //       storage: new LocalStorageWrapper(window.localStorage),
  //       debug: true,
  //       trigger: 'write',
  //     });

  //     await newPersistor.restore();
  // 		setPersistor(newPersistor);
  //     setClient(
  //       new ApolloClient({
  //         cache,
  //       })
  //     );
  //   }

  //   init().catch(console.error);
  // }, []);

  // const clearCache = useCallback(() => {
  //   if (!persistor) {
  //     return;
  //   }
  //   persistor.purge();
  // }, [persistor]);

  // const reload = useCallback(() => {
  //   window.location.reload();
  // }, []);

  // if (!client) {
  //   return <h2>Initializing app...</h2>;
  // }
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>TWplace</title>
        <meta name="title" content="TWplace" />
        <meta
          name="description"
          content="Интернет магазин по продаже одежды и аксессуаров"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="магазин, одежда, аксессуары, футболка, чехол"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Russian" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twplace.vercel.app/" />
        <meta property="og:title" content="TWplace" />
        <meta
          property="og:description"
          content="Интернет-магазин по продаже одежды и аксессуаров."
        />
        <meta property="og:site_name" content="TWplace" />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=11dWQoxFNmjOCjJSEfoqAFQiGMLHBa7qe"
        />
      </Head>
      <CookiesProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={defaultTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloProvider>
      </CookiesProvider>
    </>
  );
}
