import { useState } from "react"
import Item from "./item.js"
export default function PackingList({
  itemsList,
  onRemove,
  onSort,
  onToggle,
  onClear
}) {
  const SORT_PACKED_STATUS = "Sort by Packed Status"
  const SORT_INPUT_ORDER = "Sort by Input Order"
  const SORT_BY_DESCRIPTION = "Sort by Description"

  const [option, setOption] = useState(SORT_PACKED_STATUS)
  let sortedItems = []
  // console.log(itemsList)

  switch (option) {
    case SORT_PACKED_STATUS:
      sortedItems = itemsList
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed))
      break
    case SORT_INPUT_ORDER:
      sortedItems = itemsList.slice().sort((a, b) => a.id >= b.id)
      break
    case SORT_BY_DESCRIPTION:
      sortedItems = itemsList
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      break
  }

  return (
    <div className="packing-list">
      <div className="container container--item">
        {sortedItems !== undefined &&
          sortedItems.map((item) => (
            <Item
              key={item.id}
              itemInfo={item}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>
      <div className="filter-container">
        <select
          name="plan"
          className="filter"
          defaultValue={SORT_PACKED_STATUS}
          onChange={(e) => setOption(e.target.value)}
          id="plan"
        >
          <option value={SORT_PACKED_STATUS}>Sort by Packed Status</option>
          <option value={SORT_INPUT_ORDER}>Sort by Input</option>
          <option value={SORT_BY_DESCRIPTION}>Sort by Description</option>
        </select>
        <button className="clear-all" onClick={() => onClear()}>
          Clear List
        </button>
      </div>
    </div>
  )
}
