const ResumeItem = ({ data }) => {
  let { name, image, price, quantity } = data;
  return (
    <div className="resume-card">
      <img
        src={image}
        alt={name}
        className="resume-card__item resume-card__img"
      />
      <p className="resume-card__item resume-card__name">{name}</p>
      <h5 className="resume-card__item resume-card__price">
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
    </div>
  );
};

export default ResumeItem;
