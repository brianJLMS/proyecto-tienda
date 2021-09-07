import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">
          Los ultimo en indumentaria... <br /> <span>¡¡AL MEJOR PRECIO!!</span>
        </h1>
        <button className="button hero__btn">
          <Link to="/products">Ver Productos</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
