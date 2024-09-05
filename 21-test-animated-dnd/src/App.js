import logo from "./logo.svg";
import "./App.css";
import { Reorder } from "framer-motion";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="App">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item value={item} key={item}>
            <Card>
              <p>Item {item}</p>
            </Card>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default App;
