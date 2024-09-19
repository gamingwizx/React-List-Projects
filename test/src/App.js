import { useState, useMemo, useCallback, useEffect } from "react";
import Parent from "./Parent";
import Parent1 from "./Parent1";
import Parent2 from "./Parent2.jsx";
import TestMemoize from "./TestMemoize.jsx";
import TestMemoize1 from "./TestMemoize1.jsx";
import List from "./List";
import { useTest, TestProvider } from "./Context/TestContext";
function App() {
  const [a, setA] = useState(false);
  const [input, setInput] = useState("");
  const [appClass, setAppClass] = useState("");
  const [fromChildPost, setFromChildPost] = useState([]);

  // const randomPosts = useState(() =>
  //   Array.from({ length: 10000 }, () => randomPost())
  // );
  const handleUpdate = () => {
    console.log("Hello");
  };

  const options = useMemo(() => {
    return {
      id: 1,
      testa: a,
    };
  }, []);
  return (
    <div className={`App`}>
      <p>From App</p>
      <input onChange={(e) => setA(e.target.value)}></input>
      <p>{a}</p>
      <TestProvider>
        <TestMemoize1></TestMemoize1>
        <TestMemoize></TestMemoize>
      </TestProvider>
    </div>
  );
}

export default App;
