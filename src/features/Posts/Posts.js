import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import { selectFeeds, fetchPosts, selectSubredditPosts } from "./postsSlice";
import { getSubredditPosts } from "../../api/reddit";
import Post from "../../components/Post/Post";

export default function Posts() {
  const subredditPosts = useSelector(selectSubredditPosts);
  const { posts, error, isLoading, searchTerm, selectedSubreddit } = subredditPosts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
    console.log(selectedSubreddit);
    console.log(posts);
  }, [selectedSubreddit, dispatch]);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
