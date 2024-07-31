import { useState } from "react"
import Friend from "./Friend.js"
import Form from "./Form.js"
import Button from "./Button.js"

export default function FriendList({
  friends,
  onHandleClick,
  friendToggleId,
  rows,
  onAddFriend
}) {
  const [toggleAddFriendMenu, setToggleAddFriendMenu] = useState(false)
  const [formData, setFormData] = useState({})
  const addFriendListButtonOptions = {
    label: "Add Friend"
  }
  const addFriendFormButtonOptions = {
    label: "Add"
  }
  const onOpenAddFriendMenu = () => {
    setToggleAddFriendMenu((toggleAddFriendMenu) => !toggleAddFriendMenu)
  }
  const onHandleInput = (name, value) => {
    setFormData((formData) => ({ ...formData, [name]: value }))
  }
  const onAddFriendClick = () => {
    onAddFriend(formData)
  }

  return (
    <div className="friend-list-container">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friendInfo={friend}
          onHandleClick={onHandleClick}
          friendToggleId={friendToggleId}
        />
      ))}
      {toggleAddFriendMenu ? (
        <Form
          rows={rows}
          options={addFriendFormButtonOptions}
          onHandleClick={onAddFriendClick}
          onHandleInput={onHandleInput}
        />
      ) : (
        ""
      )}
      <Button
        inputOptions={addFriendListButtonOptions}
        onHandleClick={() => onOpenAddFriendMenu()}
      />
    </div>
  )
}
