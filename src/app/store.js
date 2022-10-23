import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import subredditPostsReducer from "../features/Posts/postsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    subredditPosts: subredditPostsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
