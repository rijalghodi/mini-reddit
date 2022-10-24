import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../api/reddit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: {
      postId1: ["Post Comment Body 1", "post comment body 2"],
    },
    isLoading: false,
    error: false,
  },
  reducers: {
    removeAllComments: (state, action) => {
      state.comments = {};
    },
  },
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      // state.comments[] = action.payload;
      // state.comments = action.payload;
      // state.comments = { ...state.comments, postId2: action.payload };
      state.comments[`${action.payload[0].parent_id}`] = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.comments[`postGagal`] = action.payload;
    },
  },
});

export const { removeAllComments } = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectComments = (state) => state.comments.comments;
