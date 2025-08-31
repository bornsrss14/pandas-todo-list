//Formulario para agregar una nueva tarea.Input + botón.
import React, { useState } from "react";
export const ToDoForm = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity("1");
  }

  return (
    <div className="border-toDoForm">
      <h2 style={{ textAlign: "center ", margin: ".5rem 1rem" }}>
        Productivity Mode: ON (★‿★)
      </h2>
      <form id="form-input" onSubmit={handleSubmit}>
        <select
          onChange={(e) => setQuantity(+e.target.value)}
          id="opciones"
          value={quantity}
          name="opciones"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          placeholder="Item..."
          className="input-class"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button className="btn-add">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
