import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../api/reddit";
import { removeAllComments, selectComments } from "./CommentsSlice";

import "./Comments.css";
import { selectSelectedSubreddit } from "../Posts/postsSlice";
import Comment from "../../components/Comment/Comment";

export default function Comments({ permalink, postId }) {
  const dispatch = useDispatch();
  const postComments = useSelector(selectComments);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const comments = postComments[`${postId}`];

  // get the comments from API if permalink updated
  useEffect(() => {
    dispatch(getComments(permalink));
  }, [permalink, dispatch]);

  // remove all comments if user select the other subreddit
  useEffect(() => {
    dispatch(removeAllComments());
  }, [selectedSubreddit]);

  return <ul className="comments-container">{comments && comments.slice(0, 5).map((comment) => <Comment key={comment.id} comment={comment} />)}</ul>;
}
