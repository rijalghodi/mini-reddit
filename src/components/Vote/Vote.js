import React from "react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaArrowDown } from "react-icons/fa";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

import { GoArrowDown, GoArrowUp } from "react-icons/go";

import { TiArrowUpOutline, TiArrowDownOutline, TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";

import "./Vote.css";

export default function Vote() {
  return (
    <div className="vote-container">
      <button className="up flex-standard">
        <TbArrowBigTop />
        <span>32k</span>
      </button>
      <button className="down">
        <TbArrowBigDown />
      </button>
    </div>
  );
}
