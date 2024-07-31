import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"
import FriendList from "./FriendList.js"
import BillSplitMenu from "./BillSplitMenu.js"
import Constant from "./constant.js"
function App() {
  const [friendToggleId, setFriendToggleId] = useState(null)
  const [billMenuRows, setBillMenuRows] = useState([
    {
      id: 1,
      label: "💰 Bill value",
      passingKey: Constant.PASSINGKEY_BILL_AMOUNT
    },
    {
      id: 2,
      label: "🧍‍♀️ Your expense"
    },
    {
      id: 3,
      label: "👫",
      label1: "expense",
      passingKey: Constant.PASSINGKEY_BILL_AMOUNT,
      readOnly: true
    },
    {
      id: 4,
      label: "🤑 Who is paying the bill",
      type: "dropdown",
      dropdownOptions: ["Me"]
    }
  ])
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "https://i.pravatar.cc/48?u=118836",
      isPositive: true,
      totalOwe: 100
    }
  ])
  const addFriendsRow = [
    {
      id: 1,
      label: "👫 Friend name"
    },
    {
      id: 2,
      label: "🌄 Image URL"
    }
  ]
  const friend =
    friends.length > 0
      ? friends.filter((friend) => friend.id === friendToggleId)
      : {}
  const handleClick = (id) => {
    setFriendToggleId((friendToggleId) => (friendToggleId === id ? null : id))
    const isIdExist = friendToggleId === null ? true : false
    const row = billMenuRows.filter((row) => row.id === 4)
    const filteredFriend = isIdExist
      ? friends.filter((friend) => friend.id === id)
      : null
    setBillMenuRows((row) =>
      row.id === 4 ? row.dropdownOptions.push(filteredFriend.name) : row
    )
    billMenuRows[3].dropdownOptions.push(filteredFriend[0].name)
  }
  const calculateSplitBill = (billInfo) => {
    const friend = friends.filter((friend) => friend.id === billInfo.id)
  }
  const onAddFriend = (friendInfo) => {
    const newFriend = { name: friendInfo["1"], image: friendInfo["2"] }
    setFriends((friends) => [...friends, newFriend])
  }
  return (
    <div className="App">
      <div className="container container--friends">
        <FriendList
          friends={friends}
          onHandleClick={handleClick}
          friendToggleId={friendToggleId}
          rows={addFriendsRow}
          onAddFriend={onAddFriend}
        />
        {friendToggleId !== null ? (
          <BillSplitMenu
            friend={friend}
            rows={billMenuRows}
            onHandleClick={calculateSplitBill}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default App
