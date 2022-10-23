import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../api/reddit";
import { selectComments } from "./CommentsSlice";
import { VscAccount } from "react-icons/vsc";
import "./Comments.css";

export default function Comments({ permalink }) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(getComments(permalink));
  }, [permalink, dispatch]);

  return (
    <ul className="comments-container">
      {comments.slice(0, 5).map((comment) => (
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
