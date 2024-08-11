import Button from "./Button.js";

export default function Input({
  onInputValueChange,
  inputValue,
  todoInputColor,
  placeholder,
}) {
  const style = { backgroundColor: `hsl(${todoInputColor})` };
  const handleInputValueChange = (value) => {
    onInputValueChange(value);
  };
  return (
    <div style={style} className="input-container">
      <Button classname="button" />
      <input
        onChange={(e) => handleInputValueChange(e.target.value)}
        style={style}
        className="input"
        value={inputValue}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
