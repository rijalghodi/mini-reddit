import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_ROOT = "https://www.reddit.com";

const fetchUser = createAsyncThunk("users/fetchByIdStatus", async (user, thunkAPI) => {
  const response = await userAPI.fetchById(user.id);
  return response.data;
});

export const getSubredditPosts = createAsyncThunk("getSubredditPosts", async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();
  const data = json.data.children.map((post) => post.data);
  return data;
});

export const getSubreddits = createAsyncThunk("getSubreddits", async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  const data = await json.data.children.map((subreddit) => subreddit.data);
  return data;
});

export const getSubreddits1 = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
