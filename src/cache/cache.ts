import { InMemoryCache } from '@apollo/client';
import { cartProductsVar } from './cartProducts/cartProductsVar';
import { modalIsShownVar } from './ModalISShown/modalIsShownVar';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartProductsVar();
          },
        },
        modalIsShown: {
          read() {
            return modalIsShownVar();
          },
        },
      },
    },
  },
});
