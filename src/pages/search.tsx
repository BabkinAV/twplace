import { useQuery } from '@apollo/client';
import FoundProducts from '../components/FoundProducts/FoundProducts';
import {
	SEARCH_PRODUCTS
} from '../queries/productQueries';
import { Product } from '../types';

import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const searchStr = router.query.q as string;
  const { loading, error, data } = useQuery<{ productSearch: Product[] }>(
    SEARCH_PRODUCTS,
    {
      variables: {
        searchStr,
      },
    }
  );


  return (
    <>
      <FoundProducts
				searchStr={searchStr}
        loading={loading}
        error={error}
        featuredProducts={data?.productSearch}
      />
    </>
  );
}
