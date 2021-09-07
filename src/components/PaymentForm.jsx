import logotype from "../assets/img/logotype.png";

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
  textAlign: "center",
};

const PaymentForm = ({
  closeModalForm,
  openModal,
  form,
  errors,
  handleBlur,
  handleChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
    closeModalForm();
  };

  return (
    <form className="pay-form" onSubmit={handleSubmit}>
      <img src={logotype} alt="logo" />
      <input
        type="text"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        required
        placeholder="Nombre"
        className="pay-form__inp"
      />
      {errors.name && <p style={styles}>{errors.name}</p>}
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        required
        value={form.lastName}
        placeholder="Apellido"
        className="pay-form__inp"
      />
      {errors.lastName && <p style={styles}>{errors.lastName}</p>}
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        required
        value={form.email}
        placeholder="Correo Electrónico"
        className="pay-form__inp"
      />
      {errors.email && <p style={styles}>{errors.email}</p>}
      <select
        name="nameCard"
        onChange={handleChange}
        required
        value={form.nameCard}
        onBlur={handleBlur}
        className="pay-form__inp"
      >
        <option>--- Nombre de Tarjeta ---</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="American Express">American Express</option>
      </select>
      {errors.nameCard && <p style={styles}>{errors.nameCard}</p>}
      <input
        type="text"
        name="lastNumber"
        value={form.lastNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Tres ultimos digitos"
        className="pay-form__inp"
      />
      {errors.lastNumber && <p style={styles}>{errors.lastNumber}</p>}
      <input
        type="text"
        name="state"
        value={form.state}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        placeholder="Estado/Provincia/Región"
        className="pay-form__inp"
      />
      {errors.state && <p style={styles}>{errors.state}</p>}
      <input
        type="text"
        name="adress"
        value={form.adress}
        onChange={handleChange}
        required
        onBlur={handleBlur}
        placeholder="Dirección"
        className="pay-form__inp"
      />
      {errors.adress && <p style={styles}>{errors.adress}</p>}
      <br />
      <input type="submit" value="Enviar" className="button pay-form__btn" />
    </form>
  );
};

export default PaymentForm;
