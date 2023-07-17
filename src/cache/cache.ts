import { InMemoryCache } from '@apollo/client';
import { cartProductsVar } from './cartProducts/cartProductsVar';
import { modalIsShownVar } from './ModalISShown/modalIsShownVar';
import { isUserAuthenticatedVar } from './userIsAuthenticated/isUserAuthenticatedVar';

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
        isUserAuthenticated: {
          read() {
            return isUserAuthenticatedVar();
          },
        },
      },
    },
  },
});
