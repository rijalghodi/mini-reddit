import React from "react";
import "./Subreddit.css";
import DefaultIcon from "../../assets/image/logo.png";

export default function Subreddit({ subreddit, onClick }) {
  const { display_name, icon_img, primary_color } = subreddit;

  const handleClick = () => {
    onClick(subreddit.url);
  };
  return (
    <button className="subreddit-button" onClick={handleClick}>
      <img src={icon_img || DefaultIcon} alt={`${display_name}`} className="subreddit-icon" style={{ border: `3px solid ${primary_color || "var(--tertiary-bg)"}` }} />
      <span>{display_name}</span>
    </button>
  );
}
