import React from "react";
import Sortbar from "./Sortbar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "./Popular.css";
const Popular = () => {
  return (
    <div id="popular">
      <div id="central">
        {/*this div contains all the central content*/}
        <h2>Popular Posts</h2>
        <Sortbar />
        <Posts />
      </div>
      <Sidebar />
      {/*this div contains all the sidebar content*/}
    </div>
  );
};

export default Popular;
