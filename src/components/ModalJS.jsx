import "./Modal.css";

const ModalJS = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modaljs ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modaljs-container" onClick={handleModalContainerClick}>
        <button className="modaljs-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default ModalJS;
