import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/Posts/postsSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleChange = ({ target }) => {
    setLocalSearchTerm(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
    setLocalSearchTerm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input id="term-input" className="term-input" onChange={handleChange} value={localSearchTerm} />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
