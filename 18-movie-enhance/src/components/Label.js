export default function Label({ children, textColor, classname }) {
  const style = { color: `hsl(${textColor})` };
  return (
    <label style={style} className={classname}>
      {children}
    </label>
  );
}
