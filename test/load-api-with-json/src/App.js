import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useReducer } from "react";
import Welcome from "./Welcome.js";
import Error from "./Error.js";
import Question from "./Question.js";
import NextButton from "./NextButton.js";
import ProgressBar from "./ProgressBar.js";
import Finish from "./Finish.js";
import Restart from "./Restart.js";
import Timer from "./Timer.js";

function App() {
  const SECS_PER_QUESTIONS = 30;
  const initialState = {
    data: [],
    status: "",
    index: 0,
    userAnswer: null,
    points: 0,
    secondsRemaining: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "loadData":
        return {
          ...state,
          data: action.payload,
          status: "Success",
        };
      case "failData":
        return {
          ...state,
          status: "Failed",
        };
      case "start":
        return {
          ...state,
          status: "start",
          secondsRemaining: SECS_PER_QUESTIONS * state.data.length,
        };
      case "answer":
        const question = state.data[state.index];
        return {
          ...state,
          userAnswer: action.payload,
          points:
            action.payload === question.answer
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          userAnswer: null,
        };
      case "finishQuestion":
        return {
          ...state,
          status: "finish",
        };
      case "restart":
        return {
          ...state,
          status: "Success",
          index: 0,
          points: 0,
          userAnswer: 0,
        };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
        };
    }
  };
  const [
    { data, status, index, userAnswer, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((result) => result.json())
      .then((result) => dispatch({ type: "loadData", payload: result }))
      .catch((result) => dispatch({ type: "failData" }));
  }, []);
  const maxPossiblePoints = data.reduce((prev, cur) => prev + cur.points, 0);
  const totalQuestions = data.length;
  return (
    <div className="App">
      {status === "Success" && <Welcome dispatch={dispatch} />}
      {status === "Failed" && <Error />}
      {status === "start" && (
        <>
          <ProgressBar
            maxPossiblePoints={maxPossiblePoints}
            index={index}
            points={points}
            totalQuestions={totalQuestions}
            userAnswer={userAnswer}
          />
          <Question
            dispatch={dispatch}
            userAnswer={userAnswer}
            question={data[index]}
          />
          <NextButton
            dispatch={dispatch}
            totalQuestions={totalQuestions}
            index={index}
            userAnswer={userAnswer}
          />
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        </>
      )}
      {status === "finish" && (
        <>
          <Finish points={points} maxPossiblePoints={maxPossiblePoints} />
          <Restart dispatch={dispatch} />
        </>
      )}
    </div>
  );
}

export default App;
