import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getLiveContest from "./actions";
const initialState = {
  value: 0,
  questions: [],
  question: {},
  shuffledAnswers: {},
  index: 0,
  testing: "",
};

export const fetchData = createAsyncThunk(
  "promise/fetchData",
  async (_, thunkAPI) => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"
    );
    if (!res.ok) {
      throw new Error("Something went wrong when fetching data.");
    }
    const data = await res.json();
    return data.results;
  }
);

export const shuffleAnswers = createAsyncThunk(
  "promise/shuffleAnswers",
  async (_, thunkAPI) => {
    const shuffledAnswers = await new Promise((resolve) => {
      const state = thunkAPI.getState().todos;
      const question = state.question;
      const min = 0;
      const max = question.incorrect_answers.length;
      let questionsLength = question.incorrect_answers.length;
      const answers = [...question.incorrect_answers, question.correct_answer];
      while (questionsLength > 0) {
        let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        [answers[randomIndex], answers[questionsLength]] = [
          answers[questionsLength],
          answers[randomIndex],
        ];
        questionsLength--;
      }
      resolve(answers);
    }).then((result) => {
      return result;
    });

    return shuffledAnswers;
  }
);

export const fetchApi2 = createAsyncThunk(
  "promise/test",
  async (_, thunkAPI) => {
    return new Promise((resolve) => setTimeout(resolve("Fetched Data"), 1000));
  }
);

export const processData = createAsyncThunk(
  "promise/processData",
  async (_, thunkAPI) => {
    const res = await new Promise((resolve) =>
      setTimeout(resolve("Returned data"), 5000)
    );
    return res;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state) => {
      state.value += 1;
    },
    todoToggled: (state) => {
      state.value -= 1;
    },
    indexIncrement: (state) => {
      state.index += 1;
    },
    currentQuestion: (state) => {
      state.question = state.questions[0][state.index];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.questions.push(action.payload);
      })
      .addCase(shuffleAnswers.fulfilled, (state, action) => {
        state.answers = action.payload;
      })
      .addCase(fetchApi2.fulfilled, (state, action) => {
        console.log("Fulfilled promise (FetchApi)", action.payload);
        state.testing = action.payload;
      })
      .addCase(processData.fulfilled, (state, action) => {
        console.log("Filfilled promise (processData)", action.payload);
      });
  },
});

export const { todoAdded, todoToggled, indexIncrement, currentQuestion } =
  todoSlice.actions;
export default todoSlice.reducer;
