import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../api/reddit";

const redditSlice = createSlice({
  name: "subredditPosts",
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    selectedSubreddit: "/r/home/",
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

// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);

    // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
    const postsWithMetadata = posts.map((post) => ({
      ...post,
      showingComments: false,
      comments: [],
      loadingComments: false,
      errorComments: false,
    }));
    dispatch(getPostsSuccess(postsWithMetadata));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
  try {
    dispatch(startGetComments(index));
    const comments = await getPostComments(permalink);
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (error) {
    dispatch(getCommentsFailed(index));
  }
};

export const selectSubredditPosts = (state) => state.subredditPosts;
const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector([selectPosts, selectSearchTerm], (posts, searchTerm) => {
  if (searchTerm !== "") {
    return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return posts;
});
