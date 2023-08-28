
import { useQuery } from '@apollo/client';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import Hero from '../components/Hero/Hero';
import SeoText from '../components/SeoText/SeoText';
import { GET_PRODUCTS } from '../queries/productQueries';
import { Product } from '../types';
import {client} from './_app';
import { InferGetStaticPropsType } from 'next';

export default function Home({featuredProducts, newProducts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <ProductsSection
				featuredProducts={featuredProducts}
				title='Успей купить'
      />
      <ProductsSection
        featuredProducts={newProducts}
				title='Новинки'
      />
      <SeoText />
    </>
  );
}

export async function getStaticProps() {
	const queriedFeaturedProducts = await client.query<{ products: Product[] }>(
    {query: GET_PRODUCTS, variables: {
			isFeatured: true
		}}
  );
	const queriedNewProducts = await client.query<{ products: Product[] }>(
    {query: GET_PRODUCTS}
  );

	return {
		props: {
			featuredProducts: queriedFeaturedProducts.data.products,
			newProducts: queriedNewProducts.data.products
		},
 };
}
