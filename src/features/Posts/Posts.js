import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import { selectFeeds, fetchPosts, selectSubredditPosts, selectFilteredPosts } from "./postsSlice";
import { getSubredditPosts } from "../../api/reddit";
import Post from "../../components/Post/Post";

export default function Posts() {
  const subredditPosts = useSelector(selectSubredditPosts);
  const { error, isLoading, selectedSubreddit } = subredditPosts;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
