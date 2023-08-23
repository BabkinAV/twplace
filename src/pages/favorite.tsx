import React from 'react';
import CartContents from '../components/CartContents/CartContents';
import FavoriteProducts from '../components/FavoriteProducts/FavoriteProducts';

const Favorite = () => {
  return (
    <section className='section-cart'>
			<FavoriteProducts />
    </section>
  );
};

export default Favorite;
