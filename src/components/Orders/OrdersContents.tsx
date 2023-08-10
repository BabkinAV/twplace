import React from 'react';
import { StyledOrdersContents } from './OrdersContents.styles';
import { Order } from '../../types';
import OrderItem from './OrderItem/OrderItem';

const OrdersContents = ({ orderArr }: { orderArr: Order[] }) => {
  return (
    <StyledOrdersContents className="order__contents">
      <p>Orders list</p>
      {orderArr.map(el => (
        <div key={el._id} className="order__item">
          <OrderItem order={el} />
        </div>
      ))}
    </StyledOrdersContents>
  );
};

export default OrdersContents;
