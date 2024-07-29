import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
import Form from "./Form.js"
import PackingList from "./PackingList.js"
function App() {
  const [items, setItems] = useState([])
  const totalItems = items.length
  const totalPackedItems = items.filter((item) => item.packed === true).length
  const totalPackedPercentage =
    totalItems > 0 ? (totalPackedItems / totalItems) * 100 : 100
  const onItemAdded = (item) => {
    setItems((items) => [...items, item])
  }
  const onItemToggled = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const clearItems = () => {
    setItems([])
  }
  const handleSort = (option) => {
    console.log(option)
    if (option === "Sort by Description") {
      setItems((items) => items.sort())
    }
  }
  return (
    <div className="App">
      <div className="container--travelling">
        <header className="header">
          <div className="container">
            <h1>Far Away</h1>
          </div>
        </header>
        <Form onAddItem={onItemAdded} />
        <PackingList
          itemsList={items}
          onRemove={handleRemove}
          onSort={handleSort}
          onToggle={onItemToggled}
          onClear={clearItems}
        />
        <div className="sort">
          <div className="description">
            You have {totalItems} items on your list and have packed{" "}
            {totalPackedItems} items ({totalPackedPercentage}%)
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
