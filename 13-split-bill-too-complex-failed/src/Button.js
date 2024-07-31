export default function Button({ inputOptions, onHandleClick }) {
  const id = "id" in inputOptions ? inputOptions.id : ""
  const buttonClass = ""
  return (
    <div className={`button`} onClick={() => onHandleClick(id)}>
      {inputOptions.friendToggleId === inputOptions.id
        ? inputOptions.label
        : inputOptions.toggled}
    </div>
  )
}
