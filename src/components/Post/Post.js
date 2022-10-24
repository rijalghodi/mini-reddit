import React, { useState } from "react";
import moment from "moment";
import "./Post.css";
import { BiComment, BiCommentDetail } from "react-icons/bi";
import { BsBookmark, BsBookmarkCheck } from "react-icons/bs";
import Vote from "../Vote/Vote";
import Comments from "../../features/Comments/Comments";
import shortenNumber from "../../util/shortenNumber";

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
        {/* <VscAccount className="icon-style" /> */}
        <span className="author-username">{post.author}</span>
        <span>.</span>
        <span>{moment.unix(post.created_utc).fromNow()}</span>
      </div>
      <article className="caption-container">{post.title}</article>
      {post.url.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) && (
        <div className="image-container">
          <img src={post.url} alt="Post Image" className="post-image" />
        </div>
      )}
      <div className="bottom-bar">
        <button className="comment-section" onClick={handleClickCommentButton}>
          <span className="bottom-bar-icon">{showComments ? <BiCommentDetail /> : <BiComment />}</span>
          <span>{shortenNumber(post.num_comments, 1)}</span>
        </button>
        <Vote voteUps={post.ups} />
        <button className="bookmark" onClick={handleClickBookmarkButton}>
          <span className="bottom-bar-icon">{bookmarked ? <BsBookmarkCheck /> : <BsBookmark />}</span>
        </button>
      </div>
      {showComments && <Comments permalink={post.permalink} postId={post.name} />}
    </div>
  );
}
