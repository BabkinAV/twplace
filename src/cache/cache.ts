import { CartProduct } from '../types';
import {makeVar, InMemoryCache, } from '@apollo/client'


export const cartProductsVar = makeVar<CartProduct[]>([]);

// TODO: consider changing cartProduct type to => {cartItemId, quantity}
// and creating @isInCart Local-only field for ProductItems 


export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartProductsVar();
          }
        }
      }
    }
  }
});