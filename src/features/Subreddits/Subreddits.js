import React, { useEffect } from "react";
import "./Subreddits.css";
import Subreddit from "../../components/Subreddit/Subreddit";
import { selectSubreddits } from "./subredditsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../../api/reddit";

export default function Subreddits() {
  const dispatch = useDispatch();
  const { subreddits } = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddits-container">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => {
          return (
            <li key={subreddit.id}>
              <Subreddit subreddit={subreddit} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
