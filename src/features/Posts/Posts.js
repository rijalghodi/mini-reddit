import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import { selectFeeds, fetchPosts, selectSubredditPosts, selectFilteredPosts } from "./postsSlice";
import { getSubredditPosts } from "../../api/reddit";
import Post from "../../components/Post/Post";
import PostLoading from "../../components/Post/PostLoading";

export default function Posts() {
  const subredditPosts = useSelector(selectSubredditPosts);
  const { error, isLoading, selectedSubreddit } = subredditPosts;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  if (isLoading) {
    return (
      <div>
        <PostLoading />
        <PostLoading />
        <PostLoading />
        <PostLoading />
        <PostLoading />
        <PostLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Sorry the page is not available</h1>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
