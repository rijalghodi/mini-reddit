import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/reddit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const subRedditSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: {
      subreddits: [],
      error: false,
      isLoading: false,
    },
  },
  reducers: {},
  extraReducers: {
    [getSubreddits.pending]: (state, action) => {
      state.subreddits.isLoading = true;
      state.subreddits.error = false;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.subreddits.isLoading = false;
      state.subreddits.error = false;
      state.subreddits.subreddits = action.payload;
    },
    [getSubreddits.rejected]: (state, action) => {
      state.subreddits.isLoading = false;
      state.subreddits.error = true;
    },
  },
});

export default subRedditSlice.reducer;

export const selectSubreddits = (state) => state.subreddits.subreddits;
