import React, { useState } from "react";
import "./Post.css";
import { BiComment, BiCommentDetail } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsBookmark, BsBookmarkCheck } from "react-icons/bs";
import { FaCommentAlt, FaRegCommentAlt } from "react-icons/fa";

import Vote from "../Vote/Vote";
import Comments from "../../features/Comments/Comments";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleClickCommentButton = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  };

  const handleClickBookmarkButton = () => {
    bookmarked ? setBookmarked(false) : setBookmarked(true);
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
        <button className="comment-section flex-standard" onClick={handleClickCommentButton}>
          {showComments ? <BiCommentDetail style={{ fontSize: "1.8rem" }} /> : <BiComment style={{ fontSize: "1.8rem" }} />}
          32k
        </button>
        <Vote voteUps={post.ups} />
        <button className="bookmark" onClick={handleClickBookmarkButton}>
          {bookmarked ? <BsBookmarkCheck style={{ fontSize: "1.7rem" }} /> : <BsBookmark style={{ fontSize: "1.7rem" }} />}
        </button>
      </div>
      {showComments && <Comments permalink={post.permalink} postId={post.name} />}
    </div>
  );
}
