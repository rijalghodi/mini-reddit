import React, { useState } from "react";
import "./Post.css";
import { BiComment } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";
import Vote from "../Vote/Vote";
import Comments from "../../features/Comments/Comments";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);

  const handleCommentsClick = () => {
    setShowComments(true);
  };

  return (
    <div className="post-container">
      <div className="sender-container flex-standard">
        <VscAccount className="icon-style" />
        <span className="author-username">{post.author}</span>
      </div>
      <article className="caption-container">{post.title}</article>
      {post.url.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) && (
        <div className="image-container">
          <img src={post.url} alt="Post Image" className="post-image" />
        </div>
      )}
      <div className="bottom-bar">
        <button className="comment-section flex-standard" onClick={handleCommentsClick}>
          <BiComment style={{ fontSize: "1.8rem" }} />
          32k
        </button>
        <Vote voteUps={post.ups} />
        <button className="bookmark">
          <BsBookmark style={{ fontSize: "1.7rem" }} />
        </button>
      </div>
      {showComments && <Comments permalink={post.permalink} />}
    </div>
  );
}
