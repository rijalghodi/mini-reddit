import React from "react";
import "./Card.css";
import { BiComment } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";
import Vote from "../../components/Vote/Vote";

export default function Card() {
  return (
    <div className="card-container">
      <div className="sender-container flex-standard">
        <VscAccount className="icon-style" />
        <span>WishkeyPeak</span>
      </div>
      <div className="caption-container">wiwjsbd ffjfhf eueueueue wosbfsbdfisd sdgbsigbsg sdfbsidbgs ghdhndto digsibgs</div>
      <div className="image-container">
        <img className="image-container" src="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
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
