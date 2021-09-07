const Hamburger = ({ handleHamburgerMenu }) => {
  return (
    <div>
      <button
        className="hamburger hamburger--squeeze"
        type="button"
        onClick={() => handleHamburgerMenu()}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
