import React, { useRef } from "react";
import Checkbox from "./Checkbox.js";
import Label from "./Label.js";
const ToDo = React.forwardRef(({ textColor, todo, onUpdateTodo }, ref) => {
  const enteredTodo = useRef(0);
  const draggedId = useRef(0);
  const enteredId = useRef(0);
  const onCheck = () => {
    const updatedTodo = {
      id: todo.id,
      name: todo.name,
      completed: !todo.completed,
    };
    onUpdateTodo(updatedTodo);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", 1);
  };

  const handleDragEnd = (e, id) => {};

  return (
    <div
      onDragStart={(e) => handleDragStart(e, todo.id)}
      onDragEnd={(e) => handleDragEnd(e, todo.id)}
      onClick={() => onCheck(enteredTodo.current)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
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
});

export default ToDo;
