import React from 'react';
import { StyledOrdersContents } from './OrdersContents.styles';
import { Order } from '../../types';
import OrderItem from './OrderItem/OrderItem';

const OrdersContents = ({ orderArr }: { orderArr: Order[] }) => {
  return (
    <StyledOrdersContents className="orders__contents">
      <h2 className="orders__heading">Заказы</h2>
      {orderArr.length > 0 ? (
        <ul className="orders__list">
          {[...orderArr]
            .sort((b, a) => parseInt(a.createdAt) - parseInt(b.createdAt))
            .map(el => (
              <OrderItem order={el} key={el._id} className="order__item" />
            ))}
        </ul>
      ) : (
        <p className='orders__empty-list'>Заказов еще не было</p>
      )}
    </StyledOrdersContents>
  );
};

export default OrdersContents;
