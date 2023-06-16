import { CartProduct, Product } from '../types';
import { makeVar, InMemoryCache } from '@apollo/client';

export const cartProductsVar = makeVar<CartProduct[]>([]);

export const addToCartProducts = (product: Product) => {
  const cartProducts = [...cartProductsVar()];
  const existingProductIdx = cartProducts.findIndex(
    el => el.product._id === product._id
  );

  if (existingProductIdx !== -1) {
    cartProducts[existingProductIdx].quantity = ++cartProducts[
      existingProductIdx
    ].quantity;
  } else {
    cartProducts.push({ product, quantity: 1 });
  }
  cartProductsVar(cartProducts);
};

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartProductsVar();
          },
        },
      },
    },
  },
});
