export default function Button({ text, classname, onClick }) {
  return (
    <input
      type="button"
      onClick={onClick}
      className={classname}
      value={text}
    ></input>
  );
}
