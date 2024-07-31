import Button from "./Button.js"

export default function Friend({ friendInfo, onHandleClick, friendToggleId }) {
  return (
    <div className="friend">
      <img className="profile-image" src={friendInfo.image} alt="" />
      <div className="profile-info">
        <h2 className="profile-title">{friendInfo.name}</h2>
        {friendInfo.isPositive ? (
          <p className="description">
            {friendInfo.name} owes you {friendInfo.totalOwe}
          </p>
        ) : (
          <p className="description">
            You owe {friendInfo.name} {friendInfo.totalOwe}
          </p>
        )}
      </div>
      <Button
        key={friendInfo.id}
        inputOptions={{
          label: "Close",
          toggled: "Select",
          id: friendInfo.id,
          friendToggleId
        }}
        onHandleClick={onHandleClick}
      />
    </div>
  )
}
