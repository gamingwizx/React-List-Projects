function Button({ onClick, context, classname, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`button ${classname}`}
      onClick={onClick}
    >
      {context}
    </button>
  );
}

export default Button;
