import { CartProduct } from '.';

export interface cartContextType {
  cartProducts: CartProduct[];
  addCartProduct: (id: string) => void;
  deleteCartProduct: (id: string) => void;
}
