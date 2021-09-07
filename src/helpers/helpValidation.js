export default function validationsForm(form) {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

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

  if (!form.lastName.trim()) {
    errors.lastName = "El campo 'Apellido' es requerido.";
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName =
      "El campo 'Apellido' solo acepta letras y espacios en blanco.";
  }

  if (form.nameCard === "" || form.nameCard === "--- Nombre de Tarjeta ---") {
    errors.nameCard =
      "Debe elegir una Tarjeta de credito para realizar el pago.";
  }

  if (form.lastNumber.length !== 3) {
    errors.lastNumber =
      "Debe poner los 3 digitos que se encuentran en la parte trasera de la tarjeta";
  }

  if (!form.state.trim()) {
    errors.state = "El campo 'Estado/Provincia/Región' es requerido.";
  } else if (!regexName.test(form.state.trim())) {
    errors.state =
      "El campo 'Estado/Provincia/Región' solo acepta letras y espacios en blanco.";
  }

  if (!form.adress.trim()) {
    errors.adress = "El campo 'Dirección' es requerido.";
  }

  return errors;
}
