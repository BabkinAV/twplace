import { useMutation } from '@apollo/client';

import { useReactiveVar } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { cartProductsVar } from '../../cache/cartProducts/cartProductsVar';
import { PLACE_ORDER } from '../../mutations/orderMutations';
import Checkbox from '../UI/Checkbox/Checkbox';
import { StyledCartContents } from './CartContents.styles';
import CartItem from './CartItem/CartItem';
import Subtotal from './Subtotal/Subtotal';
import { useState } from 'react';

const CartContents = () => {
  const cartProducts = useReactiveVar(cartProductsVar);
  const [cookies] = useCookies(['token']);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [placeOrder, { loading, error }] = useMutation<{
    placeOrder: {
      orderId: string;
    };
  }>(PLACE_ORDER, {
    errorPolicy: 'all',
    context: {
      headers: {
        authorization: 'Bearer ' + cookies.token,
      },
    },
    onCompleted: (data, err) => {
			// TODO: Validate orders in return data object https://www.apollographql.com/docs/react/data/mutations/#options
			
      setOrderNumber(data.placeOrder.orderId);
      cartProductsVar([]);
    },
  });

  const handlePlaceOrder = () => {
    const orderItemsArr = cartProducts.map(el => {
      return { productId: el.product._id, quantity: el.quantity };
    });
    placeOrder({
      variables: {
        orderContents: orderItemsArr,
      },
    });
  };

  return (
    <StyledCartContents className="cart">
      {!orderNumber ? (
        <>
          <h2 className="cart__header">Корзина</h2>
          {cartProducts.length > 0 && (
            <div className="cart__select-all select-all">
              <Checkbox label="Выбрать все" className="select-all__checkbox" />
            </div>
          )}
          <div className="cart__contents">
            {cartProducts.length > 0 ? (
              <div className="cart__items-wrapper">
                <div className="cart__items">
                  {cartProducts.map((el, idx) => (
                    <CartItem cartItem={el} key={el.product._id} />
                  ))}
                </div>
              </div>
            ) : (
              <p>В корзине сейчас пусто</p>
            )}

            <div className="cart__subtotal--wrapper">
              <Subtotal
                className="cart__subtotal subtotal"
                subTotal={cartProducts.reduce(
                  (prev, curr) =>
                    prev + curr.product.price.priceCurrent * curr.quantity,
                  0
                )}
                productsInCartNumber={cartProducts.length}
                discount={cartProducts.reduce(
                  (prev, curr) =>
                    prev +
                    (curr.product.price.priceOld
                      ? curr.product.price.priceOld -
                        curr.product.price.priceCurrent
                      : 0) *
                      curr.quantity,
                  0
                )}
                // deliveryAddr='ул. Ленина'
                handlePlaceOrderButtonClick={handlePlaceOrder}
                placeOrderMutationInProgress={loading}
                placeOrderError={error}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="order-confirmation ">
          <p className='order-confirmation__text'>Заказ {orderNumber} оформлен! Спасибо.</p>
        </div>
      )}
    </StyledCartContents>
  );
};

export default CartContents;
