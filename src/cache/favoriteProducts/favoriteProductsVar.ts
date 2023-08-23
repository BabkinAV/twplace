import { makeVar } from '@apollo/client';
import { Product } from '../../types';

export const favoriteProductsVar = makeVar<Product[]>([]);

export const addToFavoriteProducts = (product: Product) => {
  const favoriteProducts = [...favoriteProductsVar()];
  favoriteProducts.push(product);
  favoriteProductsVar(favoriteProducts);
};
export const deleteFromFavoriteProducts = (_id: string) => {
  const favoriteProducts = [...favoriteProductsVar()];
  const newFavoriteProducts = favoriteProducts.filter(el => el._id !== _id);
  favoriteProductsVar(newFavoriteProducts);
};
