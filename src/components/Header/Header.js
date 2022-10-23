import React from "react";
import Logo from "../../assets/image/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="identity">
        <img src={Logo} alt="logo" />
        <h1>MiniReddit</h1>
      </div>
    </div>
  );
}
