import { useCart } from '../../../store/context/cartContext';
import Checkbox from '../UI/Checkbox/Checkbox';
import { StyledCartContents } from './CartContents.styles';
import CartItem from './CartItem/CartItem';
import Subtotal from './Subtotal/Subtotal';

const CartContents = () => {
  const { cartProducts } = useCart();

  return (
    <StyledCartContents className="cart">
      <h2 className="cart__header">Корзина</h2>
      <div className="cart__select-all select-all">
        <Checkbox label="Выбрать все" className="select-all__checkbox" />
      </div>
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
          />
        </div>
      </div>
    </StyledCartContents>
  );
};

export default CartContents;
