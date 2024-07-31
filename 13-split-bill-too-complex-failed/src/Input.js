import { useState } from "react"

export default function Input({
  inputOptions,
  onHandleInput,
  onPassParams,
  onSetI
}) {
  const [inputValue, setInputValue] = useState("")
  let input = ""
  if (
    "passingKey" in inputOptions.nonPrint &&
    inputOptions.nonPrint["passingKey"] !== undefined
  ) {
    input = inputOptions.nonPrint["input"]
  } else {
    input = inputValue
  }

  const onInput = (e) => {
    input = inputValue

    if (
      "passingKey" in inputOptions.nonPrint &&
      inputOptions.nonPrint["passingKey"] !== undefined
    ) {
      onPassParams(e.target.value)
    } else {
      setInputValue(e.target.value)
    }
    onHandleInput(inputOptions.nonPrint.id, e.target.value)
  }
  return (
    <div className="input flex" id={inputOptions.nonPrint.id}>
      <label className="input-label">
        {Object.keys(inputOptions.print).map((key) => {
          if (key === "name" && inputOptions.print["label1"] === undefined) {
            return true
          }
          if (
            key === "input" &&
            inputOptions.print["passingKey"] === undefined
          ) {
            return true
          }
          if (key === "id") {
            return true
          }
          if (key === "passingKey") {
            return true
          }
          if (key === "input") {
            return true
          }
          if (key === "dropdownOptions") {
            return true
          }
          if (key === "type") {
            return true
          }
          return <label>{inputOptions.print[key]}&nbsp;</label>
        })}
      </label>
      {inputOptions.nonPrint.type === undefined ? (
        <input
          value={input}
          onChange={(e) => onInput(e)}
          className="input-input"
          disabled={inputOptions.nonPrint.readOnly}
        ></input>
      ) : (
        ""
      )}
      {inputOptions.nonPrint.type === "dropdown" ? (
        <select
          value={input}
          onChange={(e) => onInput(e)}
          className="input-input input-input--dropdown"
          disabled={inputOptions.nonPrint.readOnly}
        >
          {inputOptions.nonPrint.dropdownOptions.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
  )
}
