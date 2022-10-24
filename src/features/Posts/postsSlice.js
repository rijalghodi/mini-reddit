import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../api/reddit";

const redditSlice = createSlice({
  name: "subredditPosts",
  initialState: {
    posts: [],
    searchTerm: "",
    selectedSubreddit: "/r/home",
    voteNum: 0,
    error: false,
    isLoading: false,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
      state.searchTerm = "";
    },

    setVoteNum(state, action) {
      state.voteNum = action.payload;
    },

    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
    },
  },
  extraReducers: {
    [getSubredditPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [getSubredditPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getSubredditPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setPosts, getPostsFailed, getPostsSuccess, startGetPosts, setSearchTerm, setSelectedSubreddit, toggleShowingComments, getCommentsFailed, getCommentsSuccess, startGetComments } = redditSlice.actions;

export default redditSlice.reducer;

//////////////////////////////////////////////////////
// Selectors

export const selectSubredditPosts = (state) => state.subredditPosts;
const selectPosts = (state) => state.subredditPosts.posts;
export const selectSearchTerm = (state) => state.subredditPosts.searchTerm;
export const selectSelectedSubreddit = (state) => state.subredditPosts.selectedSubreddit;
export const selectVoteNum = (state) => state.subredditPosts.voteNum;

export const selectFilteredPosts = createSelector([selectPosts, selectSearchTerm], (posts, searchTerm) => {
  if (searchTerm !== "") {
    return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return posts;
});
