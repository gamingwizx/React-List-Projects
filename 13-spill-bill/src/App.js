import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function Button({ options, onClick }) {
  return (
    <button className="button" onClick={(e) => onClick(e)}>
      {options.text}
    </button>
  )
}
function Input({ options }) {
  return <input className="input-input"></input>
}
function App() {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=118836",
      totalOwe: 100
    }
  ])
  const [friend, setFriend] = useState(null)
  const [billMenuToggle, setBillMenuToggle] = useState(false)
  const [addFriendMenuToggle, setAddFriendMenuToggle] = useState(false)
  const handleBillMenuToggle = (friend) => {
    setFriend(friend)
    setBillMenuToggle(!billMenuToggle)
  }
  const handleAddFriendMenuToggle = () => {
    setAddFriendMenuToggle(!addFriendMenuToggle)
  }
  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [
      ...friends,
      { id: friends.length + 1, ...newFriend }
    ])
  }
  const handleSplitBill = ({ id, payer, amountPaid }) => {
    const updatedFriend = friends.filter((friend) => friend.id === id)[0]
    updatedFriend.totalOwe =
      payer === "Me"
        ? Number(updatedFriend.totalOwe) + amountPaid
        : Number(updatedFriend.totalOwe) - amountPaid
    setFriends((friends) =>
      friends.map((loopFriend) =>
        loopFriend.id === friend.id ? updatedFriend : loopFriend
      )
    )
    setBillMenuToggle(!billMenuToggle)
  }
  return (
    <div className="App">
      <div className="container container--friends">
        <div className="friend-list-container">
          {friends.map((friend) => (
            <Friend
              friendInfo={friend}
              onToggleBillMenu={handleBillMenuToggle}
              billMenuToggle={billMenuToggle}
            />
          ))}
          {addFriendMenuToggle ? (
            <FormAddFriend onAddFriend={handleAddFriend} />
          ) : (
            <></>
          )}
          <Button
            options={{ text: "Add Friend" }}
            onClick={handleAddFriendMenuToggle}
          />
        </div>
        <div
          style={billMenuToggle ? { backgroundColor: "#fff4e6" } : {}}
          className="bill-split-container"
        >
          {billMenuToggle ? (
            <SplitBill
              friendInfo={friend}
              onHandleSplitBill={handleSplitBill}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const handleAddFriend = (e) => {
    e.preventDefault()
    onAddFriend({ name, image, totalOwe: 0 })
  }
  return (
    <form className="form-container">
      <div className="input flex">
        <label className="input-label">👫 Friend name </label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="input-input"
        ></input>
      </div>
      <div className="input flex">
        <label className="input-label">🌄 Image URL </label>
        <input
          onChange={(e) => setImage(e.target.value)}
          className="input-input"
        ></input>
      </div>
      <Button options={{ text: "Add" }} onClick={(e) => handleAddFriend(e)} />
    </form>
  )
}

function SplitBill({ friendInfo, onHandleSplitBill }) {
  const [bill, setBill] = useState("")
  const [myExpense, setMyExpense] = useState("")
  const [payer, setPayer] = useState("Me")
  const checkExpensePositive = bill - myExpense
  const diff = checkExpensePositive > 0 ? bill - myExpense : ""
  const handleSplitBill = (e) => {
    e.preventDefault()
    const amountPaid = payer === "Me" ? diff : myExpense
    onHandleSplitBill({
      id: friendInfo.id,
      payer,
      amountPaid
    })
  }
  return (
    <form className="bill-split-container">
      <h2>Split bill with {friendInfo.name}</h2>
      <div className="input flex">
        <label className="input-label">💰 Bill value </label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="input-input"
        ></input>
      </div>
      <div className="input flex">
        <label className="input-label">🧍‍♀️ Your expense </label>
        <input
          value={myExpense}
          className="input-input"
          onChange={(e) => setMyExpense(Number(e.target.value))}
        ></input>
      </div>
      <div className="input flex">
        <label className="input-label">👫 {friendInfo.name} expense </label>
        <input className="input-input" value={diff} disabled></input>
      </div>
      <div className="input flex">
        <label className="input-label">🤑 Who is paying the bill </label>
        <select
          className="input-input"
          onChange={(e) => setPayer(e.target.value)}
        >
          <option value="Me">Me</option>
          <option value={friendInfo.name}>{friendInfo.name}</option>
        </select>
      </div>
      <div className="input flex">
        <Button
          options={{ text: "Split Bill" }}
          onClick={(e) => handleSplitBill(e)}
        />
      </div>
    </form>
  )
}

function Friend({ friendInfo, onToggleBillMenu, billMenuToggle }) {
  console.log(friendInfo)
  const handleClick = (friendInfo) => {
    onToggleBillMenu(friendInfo)
  }
  return (
    <div className="friend">
      <img className="profile-image" src={friendInfo.image} alt="" />
      <div className="profile-info">
        <h2 className="profile-title">{friendInfo.name}</h2>
        {Number(friendInfo.totalOwe) > 0 && (
          <p className="description" style={{ color: "green" }}>
            {friendInfo.name} owes you ${friendInfo.totalOwe}
          </p>
        )}
        {Number(friendInfo.totalOwe) === 0 && (
          <p className="description" style={{ color: "black" }}>
            You and {friendInfo.name} are even
          </p>
        )}
        {Number(friendInfo.totalOwe) < 0 && (
          <p className="description" style={{ color: "red" }}>
            You owe {friendInfo.name} ${Math.abs(friendInfo.totalOwe)}
          </p>
        )}
      </div>
      <Button
        options={billMenuToggle ? { text: "Close" } : { text: "Select" }}
        onClick={() => handleClick(friendInfo)}
      />
    </div>
  )
}

export default App
