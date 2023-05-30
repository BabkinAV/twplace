import { ReactNode, createContext, useContext, useState } from 'react';
import { CartProduct, Product } from '../../src/types';
import { cartContextType } from '../../src/types/cartContextType';

import productsData from '../../data/dummyFeaturedProductsList.json';

const productsArr = productsData as Product[];

const demoData = productsArr.slice(0, 3).map((el, idx) => {
  return { product: el, quantity: 1 };
});

// helper function to update quantity of product in array
const modifyProductArrQuantity = (
  cartArr: CartProduct[],
  changedProductId: string,
  modifier: 'inc' | 'dec' | number
) => {
  return cartArr.map(cartProduct => {
    if (cartProduct.product.id === changedProductId) {
      let newQuantity;
      if (typeof modifier !== 'number') {
        if (modifier === 'inc') {
					newQuantity = cartProduct.quantity + 1
				} else if (modifier === 'dec' && cartProduct.quantity > 1) {
					newQuantity = cartProduct.quantity - 1
				} else {
					newQuantity = cartProduct.quantity
				}
      } else {
        newQuantity = modifier;
      }
      return { ...cartProduct, quantity: newQuantity };
    }
    return cartProduct;
  });
};

const CartContext = createContext<cartContextType>({
  cartProducts: [],
  addCartProduct: () => {},
  deleteCartProduct: () => {},
  changeCartProductQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(demoData);

  const addCartProduct = (id: string) => {
    if (cartProducts.find(cartItem => cartItem.product.id === id)) {
      setCartProducts(prevCart => {
        let newCart = modifyProductArrQuantity(prevCart, id, 'inc');
        return newCart;
      });
    } else {
      setCartProducts(prevCart => {
        const newCartItem = productsArr.find(product => product.id === id);
        if (newCartItem) {
          return [...prevCart, { product: newCartItem, quantity: 1 }];
        } else {
          console.log('No such product!');
          return prevCart;
        }
      });
    }
  };

  const deleteCartProduct = (id: string) => {
    setCartProducts(prevCartArr =>
      prevCartArr.filter(cartProductsItem => cartProductsItem.product.id !== id)
    );
  };
  const changeCartProductQuantity = (
    id: string,
    dir: 'inc' | 'dec' | number
  ) => {
    setCartProducts(prev => {
      return modifyProductArrQuantity(prev, id, dir);
    });
  };
  const value = {
    cartProducts,
    addCartProduct,
    deleteCartProduct,
    changeCartProductQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
