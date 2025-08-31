export const DeleteMessage = ({ setItems, toggleVisibility }) => {
  return (
    <section className="main-section-message  ">
      <div className="overly-message"></div>
      <div className="message-container scale-up-center">
        <p>Are you sure you want to delete everything? (ó﹏ò｡)</p>
        <div className="div-buttons">
          <button
            onClick={() => {
              setItems([]);
              toggleVisibility();
            }}
            className="btn-add"
          >
            Aceptar
          </button>
          <button
            onClick={() => toggleVisibility()}
            className="btn-add cancelar"
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
};
export default DeleteMessage;
