import { useQuery } from '@apollo/client';
import FoundProducts from '../components/FoundProducts/FoundProducts';
import {
	SEARCH_PRODUCTS
} from '../queries/productQueries';
import { Product } from '../types';

export default function Home() {
  const { loading, error, data } = useQuery<{ productSearch: Product[] }>(
    SEARCH_PRODUCTS,
    {
      variables: {
        searchStr: 'чехол',
      },
    }
  );
  return (
    <>
      <FoundProducts
        loading={loading}
        error={error}
        featuredProducts={data?.productSearch}
      />
    </>
  );
}
