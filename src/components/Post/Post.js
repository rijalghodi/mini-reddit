import React from "react";
import "./Post.css";
import { BiComment } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";
import Vote from "../Vote/Vote";

export default function Post(props) {
  const { post } = props;
  return (
    <div className="post-container">
      <div className="sender-container flex-standard">
        <VscAccount className="icon-style" />
        <span className="author-username">{post.author}</span>
      </div>
      <article className="caption-container">{post.title}</article>
      <div className="image-container">
        <img src={post.url} alt="Post Image" className="post-image" />
      </div>
      <div className="bottom-bar">
        <button className="comment-section flex-standard">
          <BiComment />
          32k
        </button>
        <Vote />
        <button className="bookmark">
          <BsBookmark />
        </button>
      </div>
    </div>
  );
}
