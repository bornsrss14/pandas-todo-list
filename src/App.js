import "./App.css";
import ToDoForm from "./components/ToDoForm";
import { ProgressReport } from "./components/ProgressReport";
import { ToDoList } from "./components/ToDoList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(items);
  }
  function togglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="to-do-main">
      <ToDoForm onAddItems={handleAddItems} />{" "}
      {/* Agrega elementos al array de items  */}
      <ToDoList
        setItems={setItems}
        togglePacked={togglePacked}
        funDelete={handleDeleteItem}
        items={items}
      />{" "}
      {/* muestra los objetos del array de items */}
      <ProgressReport objetoItems={items} />{" "}
      {/* hace un conteo de los items del array  */}
    </div>
  );
}

export default App;
