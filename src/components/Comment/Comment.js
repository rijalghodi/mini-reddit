import React from "react";
import moment from "moment";
import "./Comment.css";
import { VscAccount } from "react-icons/vsc";

export default function Comment({ comment }) {
  return (
    <li className="comment-container">
      <div className="sender-container flex-standard">
        {/* <VscAccount className="icon-style" /> */}
        <span className="comment-author">{comment.author}</span>
        <span>.</span>
        <span>{moment.unix(comment.created_utc).fromNow()}</span>
      </div>
      <article className="comment-caption">{comment.body}</article>
    </li>
  );
}
