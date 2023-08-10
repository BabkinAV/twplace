import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import IsAuth from '../components/utils/IsAuth';
import { GET_ORDERS } from '../queries/orderQueries';
import { Order } from '../types';
import { useCookies } from 'react-cookie';
import OrdersContents from '../components/Orders/OrdersContents';
const Orders = () => {
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useQuery<{ orders: Order[] }>(GET_ORDERS, {
		fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
    context: {
      headers: {
        authorization: 'Bearer ' + cookies.token,
      },
    },
  });

  return (
    <section className="section-orders">
      <h2>Заказы</h2>
      {loading && <p>Данные загружаются</p>}
      {error && <p>Ошибка в получении данных</p>}
      {!loading && data?.orders && <OrdersContents orderArr={data.orders}/>}

    </section>
  );
};

// TODO: deal with flashing (https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page) and state reset on page refresh

export default IsAuth(Orders);
