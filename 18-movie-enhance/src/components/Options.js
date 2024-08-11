import Button from "./Button.js";
export default function Options({
  onClick,
  onShowAll,
  onShowActive,
  onShowCompleted,
}) {
  return (
    <div className="options">
      <Button classname="button-option" onClick={onShowAll} text="All"></Button>
      <Button
        classname="button-option"
        onClick={onShowActive}
        text="Active"
      ></Button>
      <Button
        classname="button-option"
        onClick={onShowCompleted}
        text="Completed"
      ></Button>
    </div>
  );
}
