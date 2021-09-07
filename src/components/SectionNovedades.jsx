const SectionNovedades = ({ title, content, art, mat }) => {
  return (
    <article className="novedades__articulo">
      <h4 className="articulo__title">{title}</h4>
      <p className="articulo__content">{content}</p>
      <p className="articulo__art">
        <span className="articulo__bold">ART: </span>
        {art}
      </p>
      <p className="articulo__material">
        <span className="articulo__bold">MATERIAL: </span>
        {mat}
      </p>
    </article>
  );
};

export default SectionNovedades;
