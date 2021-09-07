import { NavLink } from "react-router-dom";

const HeadNavigator = () => {
  return (
    <nav className="header__navigation">
      <ul className="header__list">
        <li className="header__list-item">
          <NavLink
            to="/"
            activeClassName="navigator-link"
            className="header__list-link"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/products"
            activeClassName="navigator-link"
            className="header__list-link"
            exact
          >
            Productos
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/contact"
            activeClassName="navigator-link"
            className="header__list-link"
            exact
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeadNavigator;
