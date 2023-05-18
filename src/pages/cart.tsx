import React from 'react';
import CartContents from '../components/CartContents/CartContents';

const cart = () => {
  return (
    <section className='section-cart'>
      <h2>Корзина</h2>
      <CartContents />
    </section>
  );
};

export default cart;
