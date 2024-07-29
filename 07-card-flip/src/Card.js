import { useState } from "react"

export default function Card({ cardInfo }) {
  const [cardStatus, setCardStatus] = useState("hide")

  const handleReveal = () => {
    setCardStatus((status) => (status === "hide" ? "reveal" : "hide"))
  }
  return (
    <div className={`card ${cardStatus}`} onClick={handleReveal}>
      <span className="question">{cardInfo.question}</span>
      <span className="answer">{cardInfo.answer}</span>
    </div>
  )
}
