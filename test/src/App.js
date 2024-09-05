import { useState } from "react";
function App() {
  const [a, setA] = useState(false);
  return (
    <div className="App">
      {a && <p>I am toggled</p>}
      <button onClick={() => setA(!a)}>Toggle A</button>
    </div>
  );
}

export default App;
