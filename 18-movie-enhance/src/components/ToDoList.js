export default function ToDoList({
  todoBgColor,
  children,
  todos,
  setTodos,
  draggedId,
  enteredId,
}) {
  const handleDragDrop = (e) => {
    console.log("Hello");
    const enteredIndex = todos.findIndex(
      (element) => element.id === enteredId.current
    );
    const draggedIndex = todos.findIndex(
      (element) => element.id === draggedId.current
    );
    const draggedItem = todos[draggedIndex];
    const enteredItem = todos[enteredIndex];
    const tempTodos = todos.slice();
    tempTodos[draggedIndex] = enteredItem;
    tempTodos[enteredIndex] = draggedItem;
    setTodos(tempTodos);
    // setTodos((todos) =>
    //   todos.map((todo) => (todo.id === draggedId.current ? enteredItem : todo))
    // );
    // setTodos((todos) =>
    //   todos.map((todo) => (todo.id === enteredId.current ? draggedItem : todo))
    // );
  };
  const style = { backgroundColor: `hsl(${todoBgColor})` };
  return (
    <div
      onDrop={(e) => handleDragDrop(e)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      style={style}
      className="todo-list"
    >
      {children}
    </div>
  );
}
