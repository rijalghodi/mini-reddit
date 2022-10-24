import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BiComment } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";
import "./Post.css";
import "./PostLoading.css";

export default function PostLoading() {
  return (
    <div className="post-container">
      <div className="sender-container flex-standard">
        <VscAccount className="icon-style" />
        <div className="author-username skeleton" />
      </div>
      <Skeleton className="caption-container skeleton" />

      <div className="image-container">
        <Skeleton className="post-image skeleton" />
      </div>

      <div className="bottom-bar">
        <button className="comment-section flex-standard">
          <BiComment style={{ fontSize: "1.8rem" }} />
          <Skeleton className="skeleton" />
        </button>
        <Skeleton className="skeleton" />
        <button className="bookmark">
          <BsBookmark style={{ fontSize: "1.7rem" }} />
        </button>
      </div>
    </div>
  );
}
