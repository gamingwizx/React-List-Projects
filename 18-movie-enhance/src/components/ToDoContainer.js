import ToDoBody from "./ToDoBody.js";
import ToDoHeader from "./ToDoHeader.js";

export default function ToDoContainer({ change, onHandleThemeSwitch }) {
  return (
    <div className="todo-container">
      <div className="container container--todo">
        <ToDoHeader change={change} onHandleThemeSwitch={onHandleThemeSwitch} />
        <ToDoBody change={change} />
      </div>
    </div>
  );
}
