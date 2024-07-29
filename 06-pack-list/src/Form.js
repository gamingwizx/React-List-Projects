import { useState } from "react"

function Form({ onAddItem }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDescription(description)
    setQuantity(quantity)
    const item = { name: description, packed: false, quantity, id: Date.now() }
    onAddItem(item)
    setDescription("")
    setQuantity(1)
  }

  return (
    <div className="form">
      <form className="container container--form" onSubmit={handleSubmit}>
        <span className="form-description">
          What do you need for your trip?
        </span>
        <select
          name="plan"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity"
          id="plan"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="item-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
        />
        <input className="add-button" type="submit" value="ADD"></input>
      </form>
    </div>
  )
}

export default Form
