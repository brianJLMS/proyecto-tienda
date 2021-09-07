import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'E-mail' es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'E-mail' es incorrecto.";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a Tratar' es requerido.";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' NO debe exceder los 255 caracteres.";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
  textAlign: "center",
};

const ContactForm = () => {
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
    response,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Escribe tu Nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
          className="contact-form__inp"
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu E-mail"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          className="contact-form__inp"
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a Tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
          className="contact-form__inp"
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus Comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
          className="contact-form__txtarea"
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input
          type="submit"
          value="Enviar"
          className="button contact-form__btn"
        />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido Enviados" bgColor="#198754" />
      )}
    </div>
  );
};

export default ContactForm;
