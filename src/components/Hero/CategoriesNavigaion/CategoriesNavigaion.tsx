import React from 'react';
import Link from 'next/link';
import { StyledCategoriesNavigaion } from './CategoriesNavigaion.styles';

const CategoriesNavigaion = () => {
  return (
    <StyledCategoriesNavigaion>
      <div className='nav__header'>
        <Link href="#">Категории товаров</Link>
      </div>
			<div className='nav__body'>
				
			</div>
    </StyledCategoriesNavigaion>
  );
};

export default CategoriesNavigaion;
