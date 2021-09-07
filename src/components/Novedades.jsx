import HomeCarousel from "./HomeCarousel";
import SectionNovedades from "./SectionNovedades";

const SECTIONS = [
  {
    title: "Zapatillas POWER LEAD",
    content:
      "Las zapatillas POWER LEAD 5 están diseñadas para que puedas entrenar cómodamente. Ideales para entrenamientos en el gimnasio, pista cubierta o al aire libre. Los detalles reflectantes en los costados te hacen más visible en condiciones de poca luz.",
    art: "BQL0025AD",
    mat: "Mesh",
  },
  {
    title: "Zapatillas Live SOFT",
    content:
      "El estilo de los 70 se actualiza para las calles de hoy. Estas zapatillas se inspiran enel clasicismo del tenis con una parte superior de piel sintética y 3 Rayas en contraste. La plantilla ligera te proporciona una pisada más cómoda.",
    art: "CBL0355LQ",
    mat: "Goma, Piel sintetica",
  },
  {
    title: "Campera Live Gray",
    content:
      "Ignorá el pronóstico del tiempo. Esta campera Live Gray para correr te mantiene cómodo en todos los tipos de clima. Su diseño con capucha es impermeable para que te puedas enfrentar al viento y la lluvia con tranquilidad.",
    art: "PIA2023LQ",
    mat: "Poliester reciclado",
  },
];

const Novedades = () => {
  return (
    <div className="novedades">
      <h3 className="novedades__title">Novedades de la Semana...</h3>
      <div className="container novedades__container">
        <div className="novedades__carousel-container">
          <div className="novedades__carousel">
            <HomeCarousel />
          </div>
        </div>
      </div>
      <div className="container novedades__info">
        {SECTIONS.map((el, index) => (
          <SectionNovedades
            key={index}
            title={el.title}
            content={el.content}
            art={el.art}
            mat={el.mat}
          />
        ))}
      </div>
    </div>
  );
};

export default Novedades;
