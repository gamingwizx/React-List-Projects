import logo from "./logo.svg"
import "./App.css"
import Card from "./Card.js"
import { useState } from "react"
function App() {
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
    }
  ]

  return (
    <div className="App">
      <div className="card-flip">
        <div className="container container--card">
          {questions.map((question) => (
            <Card cardInfo={question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
