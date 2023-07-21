import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CookiesProvider } from 'react-cookie';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { schema } from '../cache/cache';
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
        <meta name="description" content="TwPlace e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
