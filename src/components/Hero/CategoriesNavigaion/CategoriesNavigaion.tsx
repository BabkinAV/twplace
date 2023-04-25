import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledCategoriesNavigaion } from './CategoriesNavigaion.styles';
import ThreeDotsIcon from '../../assets/images/ThreeDotsIcon.svg'


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
