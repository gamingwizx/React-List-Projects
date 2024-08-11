export default function ToDoHeader({ change, onHandleThemeSwitch }) {
  const { themeIcon: icon } = change;
  return (
    <header>
      <h1 className="title">Todo</h1>
      <div onClick={onHandleThemeSwitch} className="icon">
        <img src={icon}></img>
      </div>
    </header>
  );
}
