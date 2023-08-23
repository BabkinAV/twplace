import { InMemoryCache } from '@apollo/client';
import { cartProductsVar } from './cartProducts/cartProductsVar';
import { modalIsShownVar } from './ModalISShown/modalIsShownVar';
import { isUserAuthenticatedVar } from './userIsAuthenticated/isUserAuthenticatedVar';
import { favoriteProductsVar } from './favoriteProducts/favoriteProductsVar';


export const  schema = {
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
					favoriteProducts: {
						read() {
							return favoriteProductsVar()
						}
					}
	      },
	    },
	  },
	}