import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import subredditPostsReducer from "../features/Posts/postsSlice";
import commentsReducer from "../features/Comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    subredditPosts: subredditPostsReducer,
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
