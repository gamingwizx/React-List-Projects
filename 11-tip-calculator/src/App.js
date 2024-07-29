import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function App() {
  const [bill, setBill] = useState(0)
  const [ownRating, setOwnRating] = useState(0)
  const [friendRating, setFriendRating] = useState(0)
  const tip = (bill * (ownRating / 100) + bill * (friendRating / 100)) / 2
  const onReset = () => {
    setBill(0)
    setOwnRating(0)
    setFriendRating(0)
  }
  return (
    <div className="App">
      <div className="container container--tip">
        <label>How much was the bill?</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
        <br />
        <label>How did you like the service?</label>
        <select
          value={ownRating}
          onChange={(e) => setOwnRating(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="15">Absolutely amazing (15%)</option>
        </select>
        <br />
        <label>How did your friend like the service?</label>
        <select
          value={friendRating}
          onChange={(e) => setFriendRating(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="15">Absolutely amazing (15%)</option>
        </select>
        <br />
        <h2>
          You pay ${bill} (${bill} + ${tip} tip)
        </h2>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
