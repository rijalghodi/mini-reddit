import React, { useState } from "react";

import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaArrowDown } from "react-icons/fa";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

import { GoArrowDown, GoArrowUp } from "react-icons/go";

import { TiArrowUpOutline, TiArrowDownOutline, TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";

import "./Vote.css";

export default function Vote({ voteUps }) {
  const [voteValue, setVoteValue] = useState(voteUps);
  const [isVoteUp, setIsVoteUp] = useState(false);
  const [isVoteDown, setIsVoteDown] = useState(false);

  const handleClickUp = ({ currentTarget }) => {
    if (isVoteUp == false) {
      setVoteValue((prev) => prev + 1);
      setIsVoteUp(true);
      setIsVoteDown(false);
    }
  };

  const handleClickDown = ({ currentTarget }) => {
    if (isVoteDown === false) {
      setVoteValue((prev) => prev - 1);
      setIsVoteUp(false);
      setIsVoteDown(true);
    }
  };

  return (
    <div className="vote-container">
      <button className="up flex-standard" onClick={handleClickUp} aria-label="Up vote">
        {isVoteUp === true ? <GoArrowUp style={{ fontSize: "1.5rem" }} /> : <TbArrowBigTop />}
        <span>{voteValue}</span>
      </button>
      <button className="down" onClick={handleClickDown} aria-label="Down vote">
        {isVoteDown === true ? <GoArrowDown style={{ fontSize: "1.5rem" }} /> : <TbArrowBigDown />}
      </button>
    </div>
  );
}
