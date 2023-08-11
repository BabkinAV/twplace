import React from 'react';
import { StyledOrdersContents } from './OrdersContents.styles';
import { Order } from '../../types';
import OrderItem from './OrderItem/OrderItem';

const OrdersContents = ({ orderArr }: { orderArr: Order[] }) => {
  return (
    <StyledOrdersContents className="order__contents">
			 <h2 className='orders__heading'>Заказы</h2>
      {orderArr.map(el => (
        <OrderItem order={el} key={el._id} className='order__item'/>
      ))}
    </StyledOrdersContents>
  );
};

export default OrdersContents;
