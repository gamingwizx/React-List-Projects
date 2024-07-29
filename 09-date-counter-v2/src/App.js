import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"
function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const date = new Date()
  date.setDate(new Date(date).getDate() + count)
  const resetDate = () => {
    date.setDate(new Date())
    setCount(0)
    setStep(1)
  }
  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <label>Step: {step}</label>
      <br />
      <input
        type="button"
        value="-"
        onClick={() => setCount((count) => count - step)}
      />
      <input type="text" value={count} />
      <input
        type="button"
        value="+"
        onClick={() => setCount((count) => count + step)}
      />
      {count > 0 && (
        <p>
          {count} days from today is {date.toDateString()}
        </p>
      )}
      {count === 0 && <p>Today is {date.toDateString()}</p>}
      {count < 0 && (
        <p>
          {count} days before today is {date.toDateString()}
        </p>
      )}
      <input type="button" value="Reset" onClick={() => resetDate()} />
    </div>
  )
}

export default App
