import { createAsyncThunk } from "@reduxjs/toolkit";
const getLiveContest = createAsyncThunk(
  "contests/fetchLive",
  async (params, thunkAPI) => {
    console.log(thunkAPI, "thunkAPI");
    console.log(params);
    const liveContest = setTimeout(console.log("Hello"), 2000);

    return true;
  }
);

export default getLiveContest;
