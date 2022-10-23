import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Feeds.css";
import Card from "../../components/Card/Card";
import { selectFeeds, fetchPosts } from "./feedsSlice";

export default function Feeds() {
  return (
    <div className="feed-container">
      <Card />
    </div>
  );
}
