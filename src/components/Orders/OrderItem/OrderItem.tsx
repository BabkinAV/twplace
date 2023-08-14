import React from 'react';
import { Order } from '../../../types';
import Image from 'next/image';
import { parseOrderDate } from '../../../helpers/parseOrderDate';
import { StyledOrderItem } from './OrderItem.styles';

const OrderItem = ({
  order,
  className,
}: {
  order: Order;
  className: string;
}) => {
  return (
    <StyledOrderItem className={className}>
      <h3 className="order__heading">
        Заказ № {order._id}{' '}
        <span className="order__date">
          {' '}
          от {parseOrderDate(order.createdAt)}
        </span>
      </h3>
      <ul className="product__list">
        {order.products.map(el => (
          <li key={el.product._id} className="product__item">

            <div className="product__image">
							<Image
								src={el.product.imageLink}
								alt={el.product.title}
								width={80}
								height={80}
								className="product__image"
							/>
						</div>
            <div className="product__title">{el.product.title}</div>
            <div className="product__size">{el.product.size}</div>
            <div className="product__color">{el.product.color}</div>
            <div className="product__quantity">{el.quantity}</div>
            <div className="product__price product__price--item">
              {el.product.price.priceCurrent}₽
            </div>
            <div className="product__price product__price--item">
              {el.totalProductPrice}₽
            </div>
          </li>
        ))}
      </ul>
			<div className='order__total'>
			Сумма <span className='order__price'>{order.total}₽</span>
			</div>
    </StyledOrderItem>
  );
};

export default OrderItem;
