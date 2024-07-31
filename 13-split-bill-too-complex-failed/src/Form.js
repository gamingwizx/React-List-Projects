import Input from "./Input.js"
import Button from "./Button.js"
import { useState } from "react"
export default function Form({
  rows,
  onHandleClick,
  onHandleInput,
  buttonOptions,
  options
}) {
  const [input, setInput] = useState("")
  const [i, setI] = useState("")
  const option = { ...options }
  const name = "name" in options ? options["name"] : ""
  const amount = "amount" in options ? options["amount"] : ""
  const onInput = (name, value) => {
    onHandleInput(name, value)
  }
  const onPassParams = (value) => {
    setInput((input) => {
      return value
    })
  }
  const handleSetI = (value) => {
    setI(value)
  }

  return (
    <form className="form-container">
      {rows.map((row) => {
        return (
          <Input
            key={row.id}
            inputOptions={{
              print: {
                label: row.label,
                name: name,
                label1: row.label1
              },
              nonPrint: {
                id: row.id,
                passingKey: row.passingKey,
                input: input,
                i: i,
                readOnly: row.readOnly,
                type: row.type,
                dropdownOptions: row.dropdownOptions
              }
            }}
            onHandleInput={onInput}
            onPassParams={onPassParams}
            onSetI={handleSetI}
          />
        )
      })}
      <div className="input flex">
        <label className="input-label"></label>
        <Button inputOptions={option} onHandleClick={onHandleClick} />
      </div>
    </form>
  )
}
