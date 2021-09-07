import ResumeItem from "./ResumeItem";

const Resume = ({ cart, form, total, closeModal, clearCart }) => {
  const { name, lastName, email, nameCard, lastNumber, state, adress } = form;

  return (
    <div>
      {cart.map((item, index) => (
        <ResumeItem key={index} data={item} />
      ))}

      <div className="resume-card">
        <p>Envio: </p>
        <p>FREE</p>
      </div>
      <div className="resume-card">
        <p>TOTAL : </p>
        <p>${total}.00</p>
      </div>

      <div>
        <h4>Resumen de Pago</h4>
        <p>
          <span className="resume__item">Nombre y apellido:</span> {name}{" "}
          {lastName}
        </p>
        <p>
          <span className="resume__item">Correo:</span> {email}
        </p>
        <p>
          <span className="resume__item">Nombre de Tarjeta:</span> {nameCard}
        </p>
        <p>
          <span className="resume__item">Ultimos 3 digitos:</span> {lastNumber}
        </p>
        <p>
          <span className="resume__item">Estado/provincia/región:</span> {state}
        </p>
        <p>
          <span className="resume__item">Dirección:</span> {adress}
        </p>
      </div>
      <button
        className="button"
        onClick={() => {
          closeModal();
          clearCart();
        }}
      >
        Completar Compra
      </button>
    </div>
  );
};

export default Resume;
