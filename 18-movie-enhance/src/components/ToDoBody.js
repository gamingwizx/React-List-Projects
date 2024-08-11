import { useState, useRef, useEffect } from "react";
import Form from "./Form.js";
import Input from "./Input.js";
import Button from "./Button.js";
import ToDoList from "./ToDoList.js";
import ToDo from "./ToDo.js";
import Label from "./Label.js";
import Options from "./Options.js";
import ToDoFooter from "./ToDoFooter.js";
import {
  addNewTodo,
  handleUpdateTodo,
  handleOnClick,
  handleShowActive,
  handleShowAll,
  handleShowCompleted,
  handleOnDrop,
} from "../functions.js";
export default function ToDoBody({ change }) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const refTodos = useRef([]);
  const draggedId = useRef(0);
  const enteredId = useRef(0);
  const draggables = useRef([]);
  const {
    backgroundImage: bgImage,
    backgroundColor: bgColor,
    todoBackgroundColor: todoBgColor,
    todoBackgroundColor: todoInputColor,
    textColor: textColor,
  } = change;

  useEffect(() => {
    draggables.current = draggables.current.slice(0, todos.length + 1);
  });
  return (
    <section className="todo-body">
      <Form onSubmit={() => addNewTodo()} todoBgColor={todoBgColor}>
        <Input
          onInputValueChange={(value) => setInputValue(value)}
          inputValue={inputValue}
          todoInputColor={todoInputColor}
          placeholder="Create a new todo..."
        />
      </Form>
      <ToDoList
        onDrop={(e) => handleOnDrop(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        className="todos-drag"
        todoBgColor={todoBgColor}
      >
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            onEnter
            textColor={textColor}
            onUpdateTodo={(updatedToDo) => handleUpdateTodo(updatedToDo)}
            todo={todo}
            ref={(el) => (draggables.current[todo.id] = el)}
          />
        ))}

        <ToDoFooter>
          <Label classname="option-label">
            {todos.filter((todo) => todo.completed === false).length} items left
          </Label>
          <Options
            onShowActive={() => handleShowActive()}
            onShowAll={() => handleShowAll()}
            onShowCompleted={() => handleShowCompleted()}
          ></Options>
          <Button
            onClick={() => handleOnClick()}
            classname="button-option"
            text="Clear Completed"
          ></Button>
        </ToDoFooter>
      </ToDoList>
    </section>
  );
}
