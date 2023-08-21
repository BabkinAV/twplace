import { makeVar } from '@apollo/client';
import { CartProduct, Product } from '../../types';

export const cartProductsVar = makeVar<CartProduct[]>([]);

export const addToCartProducts = (product: Product) => {
  const cartProducts = [...cartProductsVar()];
  const existingProductIdx = cartProducts.findIndex(
    el => el._id === product._id
  );

  if (existingProductIdx !== -1) {
    cartProducts[existingProductIdx].quantity = ++cartProducts[
      existingProductIdx
    ].quantity;
  } else {
    cartProducts.push({ ...product, quantity: 1 });
  }
  cartProductsVar(cartProducts);
};

export const deleteCartProduct = (productId: string) => {
  cartProductsVar(
    cartProductsVar().filter(
      cartProductsItem => cartProductsItem._id !== productId
    )
  );
};


export const changeCartProductQuantity = (
	_id: string,
	modifier: 'inc' | 'dec' | number
) => {
	const cartArr = cartProductsVar();
	cartProductsVar(
		cartArr.map(cartProduct => {
			if (cartProduct._id === _id) {
				let newQuantity;
				if (typeof modifier !== 'number') {
					if (modifier === 'inc') {
						newQuantity = cartProduct.quantity + 1;
					} else if (modifier === 'dec' && cartProduct.quantity > 1) {
						newQuantity = cartProduct.quantity - 1;
					} else {
						newQuantity = cartProduct.quantity;
					}
				} else {
					newQuantity = modifier;
				}
				return { ...cartProduct, quantity: newQuantity };
			}
			return cartProduct;
		})
	);
}


