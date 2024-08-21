function Label({ context, classname }) {
  return <label className={`label ${classname}`}>{context}</label>;
}

export default Label;
