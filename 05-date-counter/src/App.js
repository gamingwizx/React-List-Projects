import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date("june 21 2017")

  date.setDate(new Date(date).getDate() + count)

  function updateStep(operation) {
    operation === "+" && setStep((e) => e + 1)
    operation === "-" && setStep((e) => e - 1)
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => updateStep("-")}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => updateStep("+")}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((e) => e - 1 * step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((e) => e + 1 * step)}>+</button>
      </div>
      <div>
        {count < 0 && (
          <p>
            {Math.abs(count)} days from today is {new Date(date).toDateString()}
          </p>
        )}
        {count === 0 && <p>Today is {new Date(date).toDateString()}</p>}
        {count > 0 && (
          <p>
            {count} days from today is {new Date(date).toDateString()}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
