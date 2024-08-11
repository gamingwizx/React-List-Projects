import { useState } from "react";

export default function Checkbox({ text, classname, completed }) {
  const [checked, setChecked] = useState(false);
  return (
    <input
      type="checkbox"
      className={classname}
      checked={completed}
      readOnly
    ></input>
  );
}
