import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
function App() {
  return (
    <div className="App">
      <div className="container">
        <AccordionList />
      </div>
    </div>
  )
}

function AccordionList({ info }) {
  const [accordionId, setAccordionId] = useState(0)
  const infos = [
    {
      id: 1,
      title: "What are these chairs assembled?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    },
    {
      id: 2,
      title: "What are these chairs assembled?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    },
    {
      id: 3,
      title: "What are these chairs assembled?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    }
  ]
  const handleToggle = (id) => {
    setAccordionId(accordionId === id ? null : id)
  }
  return (
    <div className="accordion-container">
      {infos.map((info) => (
        <div
          style={
            accordionId === info.id
              ? {
                  borderTop: "2px solid green"
                }
              : {}
          }
          className="accordion"
          key={info.id}
          onClick={() => handleToggle(info.id)}
        >
          <div
            className="title-container"
            style={
              accordionId === info.id
                ? {
                    color: "green"
                  }
                : {}
            }
          >
            <h2 className="title">
              {String(info.id).padStart(2, "0")}&nbsp;
              {info.title}
            </h2>
            <span class="icon">{accordionId === info.id ? "-" : "+"}</span>
          </div>
          <p
            className="description"
            style={accordionId === info.id ? { padding: "1em" } : {}}
          >
            {accordionId === info.id ? info.description : ""}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
