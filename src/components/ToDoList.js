import { useState } from "react";¨
import ToDoItem from "./ToDoItem";
import DeleteMessage from "./DeleteMessage";
//Renderiza un .map() de todos los TodoItem.

export const ToDoList = ({ items, funDelete, togglePacked, setItems }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <>
      <div id="main-container-items">
        {items.map((item, index) => (
          <ToDoItem
            togglePacked={togglePacked}
            funDelete={funDelete}
            key={index}
            item={item}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "2rem",
        }}
      >
        {items.length > 0 && (
          <button className="btn-add" onClick={toggleVisibility}>
            Clean list
          </button>
        )}
        {visibility && (
          <DeleteMessage
            toggleVisibility={toggleVisibility}
            setItems={setItems}
          />
        )}
      </div>
    </>
  );
};

export default ToDoList;
