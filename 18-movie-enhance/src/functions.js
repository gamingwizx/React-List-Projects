import { useState, useRef } from "react";
const populateTodo = (todos) => {
  const refTodos = useRef(todos);
  const [todos, setTodos] = useState();
  setTodos(() => {
    return refTodos.current;
  });
};
const useAddNewTodo = () => {
  const newTodo = {
    id: refTodos.current.length + 1,
    name: inputValue,
    completed: false,
  };
  refTodos.current = [...refTodos.current, newTodo];
  populateTodo();
};

const handleUpdateTodo = (updatedTodo) => {
  refTodos.current = refTodos.current.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  populateTodo();
};
const handleOnClick = () => {
  refTodos.current = [];
  populateTodo();
};
const handleShowActive = () => {
  populateTodo();
  setTodos((todos) => todos.filter((todo) => todo.completed === false));
};
const handleShowAll = () => {
  populateTodo();
};
const handleShowCompleted = () => {
  populateTodo();
  setTodos((todos) => todos.filter((todo) => todo.completed === true));
};
const handleDragOver = (e) => {
  console.log(draggables);
};

const handleOnDrop = (e) => {
  console.log("Test");
};

export {
  addNewTodo,
  handleUpdateTodo,
  handleOnClick,
  handleShowActive,
  handleShowAll,
  handleShowCompleted,
  handleOnDrop,
};
