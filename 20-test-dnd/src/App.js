import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
function App() {
  const drag = useRef(0);
  const hover = useRef(0);
  const array = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const handleDragEnd = () => {
    console.log(drag.current, hover.current);
  };

  return (
    <div className="App">
      {array.map((ar) => (
        <Div
          key={ar.id}
          drag={drag}
          hover={hover}
          ar={ar}
          handleDragEnd={() => handleDragEnd()}
        />
      ))}
    </div>
  );
}

function Div({ drag, hover, ar, handleDragEnd }) {
  const style = { backgroundColor: "lightblue", margin: "1em" };
  return (
    <div
      onDragStart={(e) => (drag.current = ar.id)}
      onDragEnter={(e) => (hover.current = ar.id)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={(e) => handleDragEnd()}
      draggable="true"
      style={style}
      className="Hello"
    >
      {ar.id}
    </div>
  );
}

export default App;
