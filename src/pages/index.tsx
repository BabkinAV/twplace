
import { useQuery } from '@apollo/client';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';
import SeoText from '../components/SeoText/SeoText';
import { GET_FEATURED_PRODUCTS } from '../queries/productQueries';
import { Product } from '../types';

export default function Home() {
  const { loading, error, data } = useQuery<{ featuredProducts: Product[] }>(
    GET_FEATURED_PRODUCTS
  );
  return (
    <>
      <Hero />
      <FeaturedProducts
        loading={loading}
        error={error}
        featuredProducts={data?.featuredProducts}
      />
      <SeoText />
    </>
  );
}
