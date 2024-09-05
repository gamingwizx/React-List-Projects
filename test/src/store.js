import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer.js";
const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
export default store;
