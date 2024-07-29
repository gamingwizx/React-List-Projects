import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function App() {
  return (
    <div className="App">
      <div className="card-flip">
        <div className="container">
          <CardFlip />
        </div>
      </div>
    </div>
  )
}

const questions = [
  {
    id: 1,
    question: "How are you?",
    answer: "I am fine"
  },
  {
    id: 2,
    question: "What is your hobby?",
    answer: "I love reading"
  },
  {
    id: 3,
    question: "What is your favourite pet?",
    answer: "Dogs"
  },
  {
    id: 4,
    question: "How are you?",
    answer: "I am fine"
  },
  {
    id: 5,
    question: "What is your hobby?",
    answer: "I love reading"
  },
  {
    id: 6,
    question: "What is your favourite pet?",
    answer: "Dogs"
  }
]
function CardFlip() {
  const [questionId, setQuestionId] = useState(null)
  const handleClick = (id) => {
    setQuestionId((questionId) => (questionId === id ? null : id))
  }
  return (
    <>
      {questions.map((question) => (
        <div
          className="card"
          key={question.id}
          onClick={() => handleClick(question.id)}
        >
          {question.id === questionId ? question.answer : question.question}
        </div>
      ))}
    </>
  )
}

export default App
