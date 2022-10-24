import React from "react";
import Logo from "../../assets/image/logo.png";
import "./Header.css";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const handleClickMenu = () => {
    const subredditContainer = document.getElementById("subreddits-container");
    subredditContainer.style.display = "block";
  };
  return (
    <div className="header-bg">
      <div className="identity">
        <img src={Logo} alt="logo" />
        <h1>MiniReddit</h1>
      </div>
      <button className="subreddit-menu" onClick={handleClickMenu}>
        <BiMenu />
      </button>
    </div>
  );
}
