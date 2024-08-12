import React, { useState, useRef, useContext } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <Context.Provider value={{ todos, setTodos }}>{children}</Context.Provider>
  );
};

const populateTodo = () => {
  //   const { setTodos } = useContext(Context);
  //   setTodos(() => {
  //     return refTodos.current;
  //   });
};
const useTest = () => {
  const { todos } = useContext(Context);
  return todos;
};
const useSetTest = (todos) => {
  const { setTodos } = useContext(Context);
  setTodos(() => {
    return todos;
  });
  return true;
};
const addNewTodo = () => {
  //   const newTodo = {
  //     id: refTodos.current.length + 1,
  //     name: inputValue,
  //     completed: false,
  //   };
  //   refTodos.current = [...refTodos.current, newTodo];
  //   populateTodo();
};

const updateTodo = (updatedTodo) => {
  //   refTodos.current = refTodos.current.map((todo) =>
  //     todo.id === updatedTodo.id ? updatedTodo : todo
  //   );
  //   populateTodo();
};
const onClickTodo = () => {
  //   refTodos.current = [];
  //   populateTodo();
};
const showActive = () => {
  //   populateTodo();
  //   setTodos((todos) => todos.filter((todo) => todo.completed === false));
};
const showAll = () => {
  //   populateTodo();
};
const showCompleted = () => {
  //   populateTodo();
  //   setTodos((todos) => todos.filter((todo) => todo.completed === true));
};
const handleDragOver = (e) => {
  //   console.log(draggables);
};

const handleOnDrop = (e) => {};

export {
  populateTodo,
  useTest,
  useSetTest,
  addNewTodo,
  updateTodo,
  onClickTodo,
  showActive,
  showAll,
  showCompleted,
  handleDragOver,
  handleOnDrop,
};
