import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/reddit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const subRedditSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    error: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getSubreddits.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.subreddits = action.payload;
    },
    [getSubreddits.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default subRedditSlice.reducer;

export const selectSubreddits = (state) => state.subreddits;
