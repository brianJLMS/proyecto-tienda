import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import useModal from "../hooks/useModal";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ComingSoon from "./ComingSoon";
import ModalJS from "./ModalJS";
import ProductItem from "./ProductItem";
import PaymentForm from "./PaymentForm";
import Resume from "./Resume";
import { useForm } from "../hooks/useForm";
import helpValidation from "../helpers/helpValidation";

const initialForm = {
  name: "",
  lastName: "",
  email: "",
  nameCard: "",
  lastNumber: "",
  state: "",
  adress: "",
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    helpValidation
  );

  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);

  let total = cart.map((item) => item.price * item.quantity);
  let suma = 0;

  for (let i = 0; i < total.length; i++) {
    suma += total[i];
  }

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <section className="shop">
      <div className="shop__cart">
        <div className="container">
          <div className="shop__title-total">
            <h3 className="shop__cart-title">
              Carrito <i className="fas fa-shopping-cart"></i>
            </h3>
            <h4 className="shop__cart-total">TOTAL: ${suma}</h4>
          </div>
          <article className="shop__cart-items">
            <button onClick={clearCart} className="shop__del-btn">
              Limpiar Carrito
            </button>
            {cart.map((item, index) => (
              <CartItem key={index} data={item} delFromCart={delFromCart} />
            ))}
            {cart.length > 0 && (
              <button className="button" onClick={openModal}>
                Comprar
              </button>
            )}
            <ModalJS isOpen={isOpen} closeModal={closeModal}>
              <PaymentForm
                closeModalForm={closeModal}
                openModal={openModal2}
                form={form}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </ModalJS>
            <ModalJS isOpen={isOpen2} closeModal={closeModal2}>
              <Resume
                cart={cart}
                form={form}
                total={suma}
                closeModal={closeModal2}
                clearCart={clearCart}
              />
            </ModalJS>
          </article>
        </div>
      </div>
      <div className="shop__products">
        <h3 className="shop__products-title">
          Nuestros Productos de la temporada
        </h3>
        <article className="shop__prod-item container">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </article>
      </div>
      <ComingSoon />
    </section>
  );
};

export default ShoppingCart;
