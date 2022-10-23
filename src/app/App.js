import React from "react";
import "./App.css";
import Header from "../components/Header/Header";
import SearchBar from "../features/SearchBar/SearchBar";
import Posts from "../features/Posts/Posts";
import Subreddits from "../features/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <SearchBar />
      </header>
      <div className="main-container">
        <main>
          <Posts />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
