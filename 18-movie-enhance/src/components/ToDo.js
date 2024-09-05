import React, { useRef } from "react";
import Checkbox from "./Checkbox.js";
import Label from "./Label.js";
import { motion } from "framer-motion";
const ToDo = React.forwardRef(
  ({ textColor, todo, onUpdateTodo, enteredId, draggedId }, ref) => {
    const enteredTodo = useRef(0);
    const onCheck = () => {
      const updatedTodo = {
        id: todo.id,
        name: todo.name,
        completed: !todo.completed,
      };
      onUpdateTodo(updatedTodo);
    };
    const handleOnDragStart = (e) => {
      e.dataTransfer.setData("id", todo.id);
    };

    const ondrag = () => {
      console.log("Hello");
      draggedId.current = todo.id;
    };
    return (
      <motion.div
        layout
        layoutId={todo.id}
        onClick={() => onCheck(enteredTodo.current)}
        className="todo"
        ref={ref}
        draggable="true"
        datad={todo.id}
        onDragStart={(e) => ondrag(e)}
        onDragEnter={(e) => (enteredId.current = todo.id)}
      >
        <Checkbox completed={todo.completed} classname="button" />
        <Label textColor={textColor} classname="todo-label">
          {todo.name}
        </Label>
      </motion.div>
    );
  }
);

export default ToDo;
