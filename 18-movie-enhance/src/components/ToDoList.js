export default function ToDoList({ todoBgColor, children }) {
  const style = { backgroundColor: `hsl(${todoBgColor})` };
  return (
    <div style={style} className="todo-list">
      {children}
    </div>
  );
}
