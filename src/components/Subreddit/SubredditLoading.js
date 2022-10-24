import React from "react";
import "./Subreddit.css";

export default function SubredditLoading() {
  return (
    <button className="subreddit-button" style={{ border: "3px solid var(--tertiary-bg)", width: "100%", height: "30px" }}>
      <div className="subreddit-icon" style={{ border: "3px solid var(--tertiary-bg)", width: "100%", height: "30px" }} />
    </button>
  );
}
