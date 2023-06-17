import { InMemoryCache } from "@apollo/client";
import { cartProductsVar } from "./cartProducts/cartProductsVar";

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
