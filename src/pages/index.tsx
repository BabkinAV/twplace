import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import SeoText from '../components/SeoText/SeoText';

export default function Home() {
  return (
    <>
       <Hero />
      <FeaturedProducts />
      <SeoText /> 
    </>
  );
}
