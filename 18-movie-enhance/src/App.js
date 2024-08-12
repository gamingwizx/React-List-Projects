import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { flushSync } from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ToDoContainer from "./components/ToDoContainer.js";
import Bottom from "./components/Bottom.js";
import BackgroundImage from "./components/BackgroundImage.js";

function App() {
  const [theme, setTheme] = useState("dark");
  const [change, setChange] = useState({});

  const body = useRef(document.body);
  const handleThemeSwitch = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      setChange((change) => ({
        theme: "dark",
        themeIcon: "icon-moon.svg",
        todoBackgroundColor: "var(--clr-darkmode-secondary)",
        todoInputColor: "var(--clr-darkmode-input)",
        textColor: "var(--clr-darkmode-text)",
      }));
      body.current.style.setProperty(
        "background-color",
        "hsl(var(--clr-darkmode-primary))"
      );
    } else {
      setChange((change) => ({
        theme: "light",
        themeIcon: "icon-sun.svg",
        backgroundColor: "var(--clr-lightmode-primary)",
        todoBackgroundColor: "var(--clr-lightmode-secondary)",
        todoInputColor: "var(--clr-lightmode-input)",
        textColor: "var(--clr-lightmode-text)",
      }));
      body.current.style.setProperty(
        "background-color",
        "hsl(var(--clr-lightmode-primary))"
      );
    }
  }, [theme]);

  return (
    <div className="App">
      <BackgroundImage change={change} />
      <section className="todo-container-container">
        <ToDoContainer
          change={change}
          onHandleThemeSwitch={() => handleThemeSwitch()}
        />
        <Bottom change={change} />
      </section>
    </div>
  );
}

export default App;
