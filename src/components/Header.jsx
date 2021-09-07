import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import HeadNavigator from "./HeadNavigator";
import logotype from "../assets/img/logotype.png";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    const responsive = (e) => {
      if (e.matches) {
        setHamburgerMenu(true);
      } else {
        setHamburgerMenu(false);
      }
    };

    let breakpoint = window.matchMedia("(min-width:768px)");

    breakpoint.addEventListener("change", responsive);

    responsive(breakpoint);
  }, []);

  const handleHamburgerMenu = () => {
    let btn = document.querySelector(".hamburger");

    btn.classList.toggle("is-active");

    if (!hamburgerMenu) {
      setHamburgerMenu(true);
    } else {
      setHamburgerMenu(false);
    }
  };

  return (
    <header className="header">
      <div className="header__container container">
        <img src={logotype} alt="Logo" className="header__logo" />
        <Hamburger handleHamburgerMenu={handleHamburgerMenu} />

        {hamburgerMenu && <HeadNavigator />}
      </div>
    </header>
  );
};

export default Header;
