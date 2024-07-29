import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function App() {
  const [toggleBill, setToggleBill] = useState(false)
  const friends = [
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=118836",
      isPositive: true,
      totalOwe: 100
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=118836",
      isPositive: true,
      totalOwe: 100
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=118836",
      isPositive: true,
      totalOwe: 100
    }
  ]

  const handleClick = () => {
    setToggleBill((toggleBill) => !toggleBill)
  }
  return (
    <div className="App">
      <div className="container container--friends">
        <FriendList friends={friends} />
        {toggleBill ?? (
          <BillSplitMenu friends={friends} onHandleClick={handleClick} />
        )}
      </div>
    </div>
  )
}

function FriendList({ friends }) {
  return (
    <div class="friend-list-container">
      {friends.map((friend) => (
        <Friend friendInfo={friend} />
      ))}
      <Button inputOptions={{ label: "Add Friend" }} />
    </div>
  )
}

function Friend({ friendInfo }) {
  return (
    <div className="friend">
      <img className="profile-image" src={friendInfo.image} alt="" />
      <div className="profile-info">
        <h2 className="profile-title">Clark</h2>
        {friendInfo.isPositive ? (
          <p class="description">
            {friendInfo.name} owes you {friendInfo.totalOwe}
          </p>
        ) : (
          <p class="description">
            You owe {friendInfo.name} {friendInfo.totalOwe}
          </p>
        )}
      </div>
      <Button inputOptions={{ label: "Select" }} />
    </div>
  )
}

function BillSplitMenu({ friends, onHandleClick }) {
  return (
    <div className="bill-split-container">
      <h2 className="bill-title">Split bill with {friends.name} </h2>
      <Input inputOptions={{ label: "💰 Bill value" }} />
      <Input inputOptions={{ label: "🧍‍♀️ Your Expense" }} />
      <Input inputOptions={{ label: "👫 Clark's Expense" }} />
      <Input inputOptions={{ label: "🤑 Who is paying the bill?" }} />
      <div class="row">
        <Button
          inputOptions={{ label: "Split bill", className: "bill-button" }}
          onHandleClick={onHandleClick}
        />
      </div>
    </div>
  )
}

function Input({ inputOptions }) {
  return (
    <div class="flex">
      <label className="bill-label">{inputOptions.label}</label>
      <input className="bill-input"></input>
    </div>
  )
}

function Button({ inputOptions, handleClick }) {
  return (
    <div
      class={`button ${inputOptions.className}`}
      onClick={() => handleClick()}
    >
      {inputOptions.label}
    </div>
  )
}

export default App
