import {
  API_URI,
  POPULATE,
  GET_CURRENT_QUESTION,
  SHUFFLE_ANSWER,
  INDEX_INCREMENT,
  FETCH_OPTIONS,
  POINTS_ON_CORRECT,
  RESTART_GAME,
  TIMEOUT,
  DELAY,
  TIME_LIMIT_SECONDS,
  TIME_LIMIT_MINUTES,
} from "../constants.js";
import { createSlice } from "@reduxjs/toolkit";
export const intialState = {
  questions: [],
  ready: false,
  index: -1,
  question: null,
  shuffledAnswers: [],
  restart: false,
  isTimeout: false,
};
function quizReducer(state, action) {
  switch (action.type) {
    case POPULATE:
      return {
        ...state,
        questions: action.payload,
        ready: true,
        restart: false,
      };
    case INDEX_INCREMENT:
      return { ...state, index: state.index + 1 };
    case GET_CURRENT_QUESTION:
      return { ...state, question: state.questions[state.index] };
    case SHUFFLE_ANSWER:
      return { ...state, shuffledAnswers: action.payload };
    case RESTART_GAME:
      return { ...state, restart: true, isTimeout: false };
    case TIMEOUT:
      console.log("Timeout");
      return { ...state, isTimeout: true };
  }
}

const quizSlider = createSlicer({
  name: "quiz",
  initialState,
  reducers: {
    quizTimeout: (state) => {
      state.isTimeout = true;
    },
    quizRestart: (state) => {
      state.isTimeout = false;
      state.restart = true;
    },
  },
});
const reducer = quizSlider.reducer;

export const { quizTimeout, quizRestart } = quizSlider.actions;
export { reducer };
export default quizReducer;
