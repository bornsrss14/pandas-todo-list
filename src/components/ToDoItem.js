import { IconCircle, IconCircleFilled, IconTrash } from "@tabler/icons-react";

export const ToDoItem = ({ item, funDelete, togglePacked }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".4rem",
  };
  return (
    <div className="item-main slide-right ">
      <div style={style}>
        <span
          onClick={() => togglePacked(item.id)}
          style={{ cursor: "pointer" }}
        >
          {item.packed ? (
            <IconCircleFilled stroke={1} size={24} />
          ) : (
            <IconCircle stroke={1} size={24} />
          )}
        </span>

        <span>{item.quantity}</span>
        <p
          style={{
            textDecoration: item.packed ? "line-through" : "none",
            color: item.packed ? "red" : "black",
          }}
        >
          {item.description}
        </p>
      </div>
      <div style={style}>
        <button
          onClick={() => funDelete(item.id)}
          className="btn-style"
          title="delete"
        >
          <IconTrash
            className="icon-trash-edit"
            size={20}
            stroke={1.5}
            color="#dc3545"
          />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
