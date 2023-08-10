import React from 'react';
import { Order } from '../../../types';
import Image from 'next/image';

const OrderItem = ({ order }: { order: Order }) => {
  const date = new Date(parseInt(order.createdAt)).toLocaleString();
  return (
    <div>
      <h3>
        Заказ № {order._id} от {date}
      </h3>
      <div>
        {order.products.map(el => (
          <>
            <Image
              src={el.product.imageLink}
              alt={el.product.title}
              width={100}
              height={100}
            />
            {el.product.title}{' | '}Размер: {el.product.size}{' | '} Цвет:{' '}
            {el.product.color}{' | '}Количество: {el.quantity} {' | '} Цена 1шт:{' '}
            {el.product.price.priceCurrent}Р
            <hr />
          </>
        ))}
      </div>
      <h4>Сумма {order.total}Р</h4>
    </div>
  );
};

export default OrderItem;
