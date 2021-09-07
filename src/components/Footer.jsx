import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="foot__first-section">
        <div className="container foot__firsect-container">
          <div className="foot__menu">
            <h4 className="foot__menu-title">Menú</h4>
            <ul className="foot__list">
              <li className="foot__list-item">
                <Link className="foot__list-link" to="/">
                  Home
                </Link>
              </li>
              <li className="foot__list-item">
                <Link className="foot__list-link" to="/products">
                  Productos
                </Link>
              </li>
              <li className="foot__list-item">
                <Link className="foot__list-link" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot__redsoc">
            <h4 className="foot__redsoc-title">Redes Sociales</h4>
            <div className="foot__redsoc-icons">
              <i className="fab fa-facebook-square foot__icon"></i>
              <i className="fab fa-twitter-square foot__icon"></i>
              <i className="fab fa-instagram-square foot__icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="foot__second-section">
        <p className="container foot__copy-paragraph">
          VILAIN y el logo «VILAIN» son marcas registradas por VILAIN UK Limited
          en numerosas jurisdicciones alrededor del mundo. © Copyright 2021
          VILAIN UK Limited. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
