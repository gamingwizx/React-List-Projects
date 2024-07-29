import { useState } from "react"

export default function Item({ itemInfo, onRemove, onToggle }) {
  return (
    <div className="item" onClick={() => onToggle(itemInfo.id)}>
      <input
        className="packed"
        type="checkbox"
        checked={itemInfo.packed}
        readOnly
      />
      <span
        className="item-name"
        style={itemInfo.packed ? { textDecoration: "line-through" } : {}}
      >
        <span>{itemInfo.quantity}&nbsp;&nbsp;</span>
        <span>{itemInfo.name}</span>
      </span>
      <button className="item-cancel" onClick={() => onRemove(itemInfo.id)}>
        ❌
      </button>
    </div>
  )
}
