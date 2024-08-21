import { API_URI } from "../constants.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const initialState = {
  questions: [],
  index: -1,
  question: null,
  shuffledAnswers: [],
  startGame: true,
  isTimeout: false,
  points: 0,
};

export const fetchAPI = createAsyncThunk(
  "promise/fetchAPI",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(API_URI);
      if (!res.ok) {
        return thunkAPI.rejectWithValue(res.status);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const shuffle = createAsyncThunk(
  "promise/shuffle",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().quiz;
    if (!state.question) return;

    let questionLength = state.question.incorrectAnswers.length;
    const min = 0;
    const max = state.question.incorrectAnswers.length;
    let answers = [
      ...state.question.incorrectAnswers,
      state.question.correctAnswer,
    ];
    while (questionLength > 0) {
      const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
      [answers[randomIndex], answers[questionLength]] = [
        answers[questionLength],
        answers[randomIndex],
      ];
      questionLength--;
    }
    return answers;
  }
);

export const quizTimeout = createAsyncThunk(
  "promise/quizTimeout",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setStartGame(false));
    thunkAPI.dispatch(setIsTimeout(true));
  }
);
export const quizRestart = createAsyncThunk(
  "promise/quizRestart",
  async (_, thunkAPI) => {}
);

const quizSlider = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setIsTimeout: (state, action) => {
      state.isTimeout = action.payload;
    },
    addPoints: (state) => {
      state.points += 15;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    incrementIndex: (state) => {
      state.index += 1;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    getCurrentQuestion: (state) => {
      state.question = state.questions[state.index];
    },
    setStartGame: (state, action) => {
      state.startGame = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(shuffle.fulfilled, (state, action) => {
        state.shuffledAnswers = action.payload;
        state.ready = true;
      })
      .addCase(quizRestart.fulfilled, (state, action) => {
        state.startGame = true;
        state.isTimeout = false;
        state.index = -1;
        state.points = 0;
      });
  },
});

export const {
  setIsTimeout,
  incrementIndex,
  getCurrentQuestion,
  setStartGame,
  setTest,
  setIndex,
  addPoints,
  setPoints,
} = quizSlider.actions;
export default quizSlider.reducer;
