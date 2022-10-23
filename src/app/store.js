import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import feedsReducer from "../features/Feeds/Feeds";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    feeds: feedsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
