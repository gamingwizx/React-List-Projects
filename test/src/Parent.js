import { useState, memo, useCallback } from "react";
import { useTest } from "./Context/TestContext";
const Parent = memo(function Parent({ children }) {
  const [a, setA] = useState(false);
  const [input, setInput] = useState("");
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  return (
    <>
      <p>Parent</p>
      {/* <p>{searchQuery}</p>
      {a && <p>I am toggled</p>}
      <button onClick={() => setA(!a)}>Toggle A</button> */}
      {children}
    </>
  );
});

export default Parent;
