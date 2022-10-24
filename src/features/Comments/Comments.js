import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../api/reddit";
import { removeAllComments, selectComments } from "./CommentsSlice";
import { VscAccount } from "react-icons/vsc";
import "./Comments.css";
import { selectSelectedSubreddit } from "../Posts/postsSlice";

export default function Comments({ permalink, postId }) {
  const dispatch = useDispatch();
  const postComments = useSelector(selectComments);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const comments = postComments[`${postId}`];

  useEffect(() => {
    dispatch(getComments(permalink));
    console.log("comments:");
    console.log(postComments);
    console.log("---------------------");
  }, [permalink, dispatch]);

  useEffect(() => {
    dispatch(removeAllComments());
  }, [selectedSubreddit]);

  return (
    <ul className="comments-container">
      {comments &&
        comments.slice(0, 5).map((comment) => (
          <li key={comment.id} className="comment-container">
            <div className="sender-container flex-standard">
              <VscAccount className="icon-style" />
              <span className="comment-author">{comment.author}</span>
            </div>
            <article className="comment-caption">{comment.body}</article>
          </li>
        ))}
    </ul>
  );
}
