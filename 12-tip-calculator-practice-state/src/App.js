import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
  return (
    <div className="App">
      <div className="container">
        <TipCalculator />
      </div>
    </div>
  )
}

function TipCalculator() {
  const [bill, setBill] = useState(0)
  const [rate, setRate] = useState(0)
  const [friendRate, setFriendRate] = useState(0)
  const tip = (bill * (rate + friendRate)) / 100 / 2
  const total = bill + tip
  const billInfo = { bill, tip, total }
  const onReset = () => {
    setBill(0)
    setRate(0)
    setFriendRate(0)
  }
  return (
    <div>
      <Input bill={bill} onSetBill={setBill} />
      <Select rate={rate} setRate={setRate} />
      <Select rate={friendRate} setRate={setFriendRate} />
      <Output billInfo={billInfo} />
      <Reset onReset={onReset} />
    </div>
  )
}

function Input({ bill, onSetBill }) {
  return (
    <input
      placeholder="Enter bill amount"
      value={bill}
      onChange={(e) => onSetBill(Number(e.target.value))}
    ></input>
  )
}

function Select({ rate, setRate }) {
  return (
    <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
      <option value="0">Disatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">Great! (10%)</option>
      <option value="15">Very Satisfied (15%)</option>
    </select>
  )
}
function Output({ billInfo }) {
  return (
    <h2>
      You pay ${billInfo.total} (${billInfo.bill} + ${billInfo.tip} tip)
    </h2>
  )
}

function Reset({ onReset }) {
  return <button onClick={() => onReset()}>Reset</button>
}
export default App
