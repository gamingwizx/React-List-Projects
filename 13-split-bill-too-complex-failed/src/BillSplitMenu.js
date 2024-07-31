import Form from "./Form.js"
import { useState } from "react"
export default function BillSplitMenu({ friend, onHandleClick, rows }) {
  const name = friend[0].name
  const [billInfo, setBillInfo] = useState({ id: friend[0].id })
  const [bill, setBill] = useState(0)
  const buttonOptions = {
    label: "Split Bill",
    className: "bill-button",
    name: friend[0].name
  }
  const onHandleInput = (name, value) => {
    setBillInfo((billInfo) => {
      return { ...billInfo, [name]: value }
    })
    buttonOptions["amount"] = "amount" in buttonOptions ? 0 : value
  }
  const onSplitBill = () => {
    onHandleClick(billInfo)
  }
  return (
    <div className="bill-split-container">
      <h2 className="bill-title">Split bill with {name} </h2>
      <Form
        rows={rows}
        onHandleClick={onSplitBill}
        onHandleInput={onHandleInput}
        buttonOptions={buttonOptions}
        options={buttonOptions}
      />
    </div>
  )
}
