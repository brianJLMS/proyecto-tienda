import useModal from "../hooks/useModal";
import ModalJS from "./ModalJS";

const ProductItem = ({ data, addToCart }) => {
  let { id, name, image, price } = data;
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div
      style={{ border: "thin solid gray", padding: "1rem" }}
      className="prod-item"
    >
      <h4 className="prod-item__name">{name}</h4>
      {image && <img src={image} alt={name} className="prod-item__img" />}
      <h5 className="prod-item__price">${price}.00</h5>
      <button onClick={() => addToCart(id)} className="prod-item__add-btn">
        Agregar
      </button>
      <button onClick={openModal}>Mirar</button>
      <ModalJS isOpen={isOpen} closeModal={closeModal}>
        <h4 className="prod-item__name">{name}</h4>
        {image && <img src={image} alt={name} className="prod-item__img" />}
        <h5 className="prod-item__price">${price}.00</h5>
        <button onClick={() => addToCart(id)} className="prod-item__add-btn">
          Agregar
        </button>
      </ModalJS>
    </div>
  );
};

export default ProductItem;
