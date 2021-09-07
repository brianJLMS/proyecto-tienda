const CartItem = ({ data, delFromCart }) => {
  let { id, name, image, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }} className="cart-item">
      <div className="cart-item__name-img">
        <img src={image} alt={name} className="prod-item__img" />
        <h4 className="cart-item__name">{name}</h4>
      </div>
      <h5 className="cart-item__price">
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button
        onClick={() => delFromCart(id)}
        className="cart-item__del-btn button"
      >
        Eliminar Uno
      </button>
      <br />
      <button
        onClick={() => delFromCart(id, true)}
        className="cart-item__del-all-btn button"
      >
        Eliminar Todos
      </button>
    </div>
  );
};

export default CartItem;
