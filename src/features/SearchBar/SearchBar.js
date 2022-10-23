import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form>
      <div className="search-bar">
        <input id="term-input" className="term-input" />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}
