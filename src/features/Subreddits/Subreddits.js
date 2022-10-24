import React, { useEffect, useState } from "react";
import "./Subreddits.css";
import Subreddit from "../../components/Subreddit/Subreddit";
import { selectSubreddits } from "./subredditsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../../api/reddit";
import { setSelectedSubreddit } from "../Posts/postsSlice";
import { GrClose } from "react-icons/gr";

export default function Subreddits() {
  const dispatch = useDispatch();
  const { subreddits } = useSelector(selectSubreddits);

  const onClickedSubreddit = (subreddit) => dispatch(setSelectedSubreddit(subreddit));

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  const handleClickMinimize = () => {
    const subredditContainer = document.getElementById("subreddits-container");
    subredditContainer.classList.add("hidden");
  };

  return (
    <div id="subreddits-container" className="subreddits-container hidden">
      <button className="minimize" onClick={handleClickMinimize}>
        <GrClose />
      </button>
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => {
          return (
            <li key={subreddit.id}>
              <Subreddit subreddit={subreddit} onClick={onClickedSubreddit} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
