
import { useQuery } from '@apollo/client';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import Hero from '../components/Hero/Hero';
import SeoText from '../components/SeoText/SeoText';
import { GET_PRODUCTS } from '../queries/productQueries';
import { Product } from '../types';

export default function Home() {
  const featuredProducts = useQuery<{ products: Product[] }>(
    GET_PRODUCTS, {
			variables: {
				isFeatured: true
			}
		}
  );
  const newProducts = useQuery<{ products: Product[] }>(
    GET_PRODUCTS, 
  );
  return (
    <>
      <Hero />
      <ProductsSection
        loading={featuredProducts.loading}
        error={featuredProducts.error}
        featuredProducts={featuredProducts.data?.products}
				title='Успей купить'
      />
      <ProductsSection
        loading={newProducts.loading}
        error={newProducts.error}
        featuredProducts={newProducts.data?.products}
				title='Успей купить'
      />
      <SeoText />
    </>
  );
}
