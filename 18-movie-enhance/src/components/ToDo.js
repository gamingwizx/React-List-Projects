import React, { useRef } from "react";
import Checkbox from "./Checkbox.js";
import Label from "./Label.js";
const ToDo = React.forwardRef(
  (
    { textColor, todo, onUpdateTodo, draggedId, droppedId, onDragDrop },
    ref
  ) => {
    const enteredTodo = useRef(0);
    const onCheck = () => {
      const updatedTodo = {
        id: todo.id,
        name: todo.name,
        completed: !todo.completed,
      };
      onUpdateTodo(updatedTodo);
    };

    return (
      <div
        onDragStart={(e) => (draggedId.current = todo.id)}
        onClick={() => onCheck(enteredTodo.current)}
        onDrop={() => onDragDrop()}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => (droppedId.current = todo.id)}
        className="todo draggable"
        draggable="true"
        ref={ref}
      >
        <Checkbox completed={todo.completed} classname="button" />
        <Label textColor={textColor} classname="todo-label">
          {todo.name}
        </Label>
      </div>
    );
  }
);

export default ToDo;
