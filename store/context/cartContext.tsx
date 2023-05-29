import { ReactNode, createContext, useContext, useState } from 'react';
import { cartContextType } from '../../src/types/cartContextType';
import { CartProduct, Product } from '../../src/types';

import productsData from '../../data/dummyFeaturedProductsList.json';

const productsArr = productsData as Product[];

const demoData = productsArr.slice(0, 3).map((el, idx) => {
  return { product: el, quantity: 1 };
});

const CartContext = createContext<cartContextType>({
  cartProducts: [],
  addCartProduct: () => {},
  deleteCartProduct: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(demoData);

  const addCartProduct = (id: string) => {
    if (cartProducts.find(cartItem => cartItem.product.id === id)) {
      setCartProducts(prevCart => {
        const newCart = prevCart.map(cartProduct => {
          if (cartProduct.product.id === id) {
            const newQuantity = cartProduct.quantity + 1;
            return { ...cartProduct, quantity: newQuantity };
          }
          return cartProduct;
        });
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
  const value = {
    cartProducts,
    addCartProduct,
    deleteCartProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
