import { useState, useRef, useEffect } from "react";
import Form from "./Form.js";
import Input from "./Input.js";
import Button from "./Button.js";
import ToDoList from "./ToDoList.js";
import ToDo from "./ToDo.js";
import Label from "./Label.js";
import Options from "./Options.js";
import ToDoFooter from "./ToDoFooter.js";
import { Reorder } from "framer-motion";
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
  const populateTodo = () => {
    setTodos(() => {
      return refTodos.current;
    });
  };
  const addNewTodo = () => {
    const newTodo = {
      id: refTodos.current.length + 1,
      name: inputValue,
      completed: false,
    };

    refTodos.current = [...refTodos.current, newTodo];
    populateTodo();
  };

  const updateTodo = (updatedTodo) => {
    refTodos.current = refTodos.current.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    populateTodo();
  };
  const onClickTodo = () => {
    refTodos.current = [];
    populateTodo();
  };
  const showActive = () => {
    populateTodo();
    setTodos((todos) => todos.filter((todo) => todo.completed === false));
  };
  const showAll = () => {
    populateTodo();
  };
  const showCompleted = () => {
    populateTodo();
    setTodos((todos) => todos.filter((todo) => todo.completed === true));
  };

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
        todos={todos}
        setTodos={setTodos}
        enteredId={enteredId}
        draggedId={draggedId}
        todoBgColor={todoBgColor}
      >
        {todos &&
          todos.map((todo) => (
            <ToDo
              key={todo.id}
              onEnter
              textColor={textColor}
              onUpdateTodo={(updatedToDo) => updateTodo(updatedToDo)}
              todo={todo}
              draggedId={draggedId}
              enteredId={enteredId}
            />
          ))}
        <ToDoFooter>
          <Label classname="option-label">
            {todos && todos.filter((todo) => todo.completed === false).length}{" "}
            items left
          </Label>
          <Options
            onShowActive={() => showActive()}
            onShowAll={() => showAll()}
            onShowCompleted={() => showCompleted()}
          ></Options>
          <Button
            onClick={() => onClickTodo()}
            classname="button-option"
            text="Clear Completed"
          ></Button>
        </ToDoFooter>
      </ToDoList>
    </section>
  );
}
