import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef, useContext, useReducer } from "react";
import useLocalStorageState from "./useLocalStorage";
import {
  Context,
  ContextProvider,
  useHello,
  ContextProvider1,
  useColorMode,
  useSetColorMode,
} from "./context.js";

import { useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Layout from "./layout.js";
import { configureStore } from "@reduxjs/toolkit";
import {
  todoAdded,
  todoToggled,
  fetchData,
  shuffleAnswers,
  indexIncrement,
  currentQuestion,
  fetchApi2,
  processData,
} from "./reducer.js";
function App() {
  const FETCH_DATA = "FETCH_DATA";
  const ASSIGN_DATA = "ASSIGN_DATA";
  const SHUFFLE_DATA = "SHUFFLE_DATA";

  const testReducer = () => {};
  const dispatch = useDispatch();
  const { index, questions, question, answers } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (questions.length === 0) return;
    dispatch(indexIncrement());
  }, [questions, dispatch]);

  useEffect(() => {
    if (questions.length === 0) return;
    dispatch(currentQuestion());
  }, [questions, dispatch]);

  useEffect(() => {
    if (Object.keys(question).length === 0) return;
    dispatch(shuffleAnswers());
  }, [question, dispatch]);

  useEffect(() => {
    dispatch(fetchApi2()).then((result) => {
      dispatch(processData()).then((result) => console.log(result));
      console.log(result);
    });
  }, []);
  return (
    <>{answers && answers.map((answer) => <p key={answer}>{answer}</p>)}</>
  );
}

// function App() {
//   // function select(state) {
//   //   return state.some.deep.property;
//   // }

//   // let currentValue;
//   // function handleChange() {
//   //   let previousValue = currentValue;
//   //   currentValue = select(store.getState());

//   //   if (previousValue !== currentValue) {
//   //     console.log(
//   //       "Some deep nested property changed from",
//   //       previousValue,
//   //       "to",
//   //       currentValue
//   //     );
//   //   }
//   // }

//   // const printTest = () => {
//   //   console.log("print test");
//   // };
//   // const printTest1 = () => {
//   //   console.log("print test 1");
//   // };

//   // const reducer = (state, action) => {
//   //   switch (action) {
//   //   }
//   // };

//   // const [questions, dispatch] = useReducer(reducer, {});
//   // const store = configureStore({
//   //   reducer: reducer,
//   // });
//   // const thunkFunction = (dispatch, getState) => {
//   //   return new Promise((resolve) => console.log("Logging thunk function"));
//   // };
//   // const thunkFunction1 = (dispatch, getState) => {
//   //   console.log("Logging thuink function 1");
//   // };
//   // function fetchUser(id) {
//   //   return (dispatch) => {
//   //     console.log("Test dispatch I guess");
//   //   };
//   // }

//   // const unsubscribe = store.subscribe(handleChange);
//   // unsubscribe();
//   return (
//     <>
//       {/* <input value={test} onChange={(e) => onHandleChange(e)}></input> */}
//     </>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <input onChange={(e) => setState(Number(e.target.value))}></input>
//     //     <Component hello={state} />
//     //     <button>Hello</button>
//     //     {state}
//     //   </header>
//     // </div>
//   );
// }
// function Aa() {
//   const { colorMode, setColorMode } = useColorMode();
//   return (
//     <>
//       <p>{colorMode}Hello</p>
//     </>
//   );
// }
// function Component({ hello }) {
//   const [state1, useState1] = useState(hello > 5);
//   if (state1 === 30) {
//     /* eslint-disable*/
//     const [state2, useState2] = useState(0);
//     return <p>test</p>;
//   }

//   return (
//     <div className="component">
//       <input onChange={(e) => useState1(Number(e.target.value))} />
//     </div>
//   );
// }

export default App;
