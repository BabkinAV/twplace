import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledCategoriesNavigation } from './CategoriesNavigation.styles';

import { productCategory } from '../../../types';

import categoryData from '../../../../data/dummyCategoriesList.json'

const categoryLinks:productCategory[] = categoryData;


const CategoriesNavigation = () => {
  return (
    <StyledCategoriesNavigation>
      <div className="nav__header">
        <Link href="#" className="nav__link">
          Категории товаров
        </Link>
      </div>
      <div className="nav__body">
        <ul className="nav__list">
          {categoryLinks.map(el => (
            <li className="nav__link" key={el.id}>
              <Link href="#">
                <Image
                  src={el.categoryImg.categoryImagePath}
                  alt={el.categoryImg.altImageText}
                  width={20}
                  height={20}
                />
                <span>{el.categoryName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledCategoriesNavigation>
  );
};

export default CategoriesNavigation;
