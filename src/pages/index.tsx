import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import SeoText from '../components/SeoText/SeoText';

export default function Home() {
  return (
    <>
      <Head>
        <title>TWplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
			<FeaturedProducts />
			<SeoText />
    </>
  );
}
