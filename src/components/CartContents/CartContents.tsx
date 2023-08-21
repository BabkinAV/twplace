import { useMutation } from '@apollo/client';

import { useReactiveVar } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { cartProductsVar } from '../../cache/cartProducts/cartProductsVar';
import { isUserAuthenticatedVar } from '../../cache/userIsAuthenticated/isUserAuthenticatedVar';
import { modalIsShownVar } from '../../cache/ModalISShown/modalIsShownVar';
import { PLACE_ORDER } from '../../mutations/orderMutations';
import Checkbox from '../UI/Checkbox/Checkbox';
import { StyledCartContents } from './CartContents.styles';
import CartItem from './CartItem/CartItem';
import Subtotal from './Subtotal/Subtotal';
import { useState } from 'react';
import ButtonFilled from '../UI/Buttons/ButtonFilled/ButtonFilled';
import { useRouter } from 'next/router';
import useSelect from '../../hooks/useSelect';

const CartContents = () => {
  const router = useRouter();
  const cartProducts = useReactiveVar(cartProductsVar);

  const isUserAuthenticated = useReactiveVar(isUserAuthenticatedVar);
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
    onCompleted: data => {
      if (data.placeOrder) {
        setOrderNumber(data.placeOrder.orderId);
        cartProductsVar([]);
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  const handlePlaceOrder = () => {
    if (!isUserAuthenticated) {
      return modalIsShownVar(true);
    }
    const orderItemsArr = cartProducts.map(el => {
      return { productId: el._id, quantity: el.quantity };
    });
    placeOrder({
      variables: {
        orderContents: orderItemsArr,
      },
    });
  };

  // TODO: Make a custom hook on selected elements handle

  const [isSelected, isAllSelected, handleSelectClick, handleSelectAllClick] =
    useSelect(cartProducts);

  return (
    <StyledCartContents className="cart">
      {!orderNumber ? (
        <>
          <h2 className="cart__header">Корзина</h2>
          {cartProducts.length > 0 && (
            <div className="cart__select-all select-all">
              <Checkbox
                label="Выбрать все"
                className="select-all__checkbox"
								checked={isAllSelected}
                handleChange={event => handleSelectAllClick(event)}
              />
            </div>
          )}
          <div className="cart__contents">
            {cartProducts.length > 0 ? (
              <div className="cart__items-wrapper">
                <div className="cart__items">
                  {cartProducts.map((el, idx) => {
                    const isItemSelected = isSelected(el._id);
                    return (
                      <CartItem
                        cartItem={el}
                        key={el._id}
                        handleIsSelectedChange={event =>
                          handleSelectClick(event, el._id)
                        }
                        isSelected={isItemSelected}
                      />
                    );
                  })}
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
                    prev + curr.price.priceCurrent * curr.quantity,
                  0
                )}
                productsInCartNumber={cartProducts.length}
                discount={cartProducts.reduce(
                  (prev, curr) =>
                    prev +
                    (curr.price.priceOld
                      ? curr.price.priceOld - curr.price.priceCurrent
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
        <div className="order-confirmation">
          <p className="order-confirmation__text">
            Заказ {orderNumber} оформлен! Спасибо.
          </p>
          <div className="order-confirmation__wrapper">
            <ButtonFilled
              className="order-confirmation__button"
              onClick={() => router.push('/')}
            >
              Назад
            </ButtonFilled>
          </div>
        </div>
      )}
    </StyledCartContents>
  );
};

export default CartContents;
