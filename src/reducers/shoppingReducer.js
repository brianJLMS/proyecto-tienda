import { TYPES } from "../actions/shoppingActions";
import image1 from "../assets/img/product-1.jpg";
import image2 from "../assets/img/product-2.jpg";
import image3 from "../assets/img/product-3.jpg";
import image4 from "../assets/img/product-4.jpg";
import image5 from "../assets/img/product-5.jpg";
import image6 from "../assets/img/product-6.jpg";
import image7 from "../assets/img/product-7.jpg";
import image8 from "../assets/img/product-8.jpg";
import image9 from "../assets/img/product-9.jpg";
import image10 from "../assets/img/product-10.jpg";
import image11 from "../assets/img/product-11.jpg";
import image12 from "../assets/img/product-12.jpg";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Remera Roja Puma", image: image1, price: 220 },
    { id: 2, name: "Zapatillas HRX SPORT", image: image2, price: 240 },
    { id: 3, name: "Pantalon SPORT GRAY", image: image3, price: 325 },
    { id: 4, name: "Remera chomba Puma", image: image4, price: 435 },
    { id: 5, name: "Zapatillas gray SOFT", image: image5, price: 520 },
    { id: 6, name: "Remera BLACK JAGUAR", image: image6, price: 600 },
    { id: 7, name: "Medias HRX", image: image7, price: 890 },
    { id: 8, name: "Reloj FOSSIL NEGRO", image: image8, price: 220 },
    { id: 9, name: "Reloj ROADCASTER", image: image9, price: 225 },
    { id: 10, name: "Zapatillas HRX AIR", image: image10, price: 337 },
    { id: 11, name: "Zapatillas HOME", image: image11, price: 442 },
    { id: 12, name: "Pantalon Negro NIKE", image: image12, price: 627 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
