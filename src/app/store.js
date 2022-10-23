import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import feedsReducer from "../features/Feeds/Feeds";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    feeds: feedsReducer,
  },
});
