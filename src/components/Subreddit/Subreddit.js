import React from "react";
import "./Subreddit.css";

export default function Subreddit({ subreddit }) {
  const { display_name, icon_img, primary_color } = subreddit;
  return (
    <button className="subreddit-button">
      <img src={icon_img || `https://api.adorable.io/avatars/25/${display_name}`} alt={`${display_name}`} className="subreddit-icon" style={{ border: `3px solid ${primary_color}` }} />
      <span>{display_name}</span>
    </button>
  );
}
