import { CartProduct } from '.';

export interface cartContextType {
  cartProducts: CartProduct[];
  addCartProduct: (id: string) => void;
  deleteCartProduct: (id: string) => void;
	changeCartProductQuantity: (id: string, dir: 'inc' | 'dec' | number) => void;
}
