import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../api/reddit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.comments = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default commentsSlice.reducer;

export const selectComments = (state) => state.comments.comments;
