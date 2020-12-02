import React from "react";
import Sortbar from "./Sortbar";
import "./Popular.css";
const Popular = () => {
  return (
    <div id="popular">
      <div id="central">
        {/*this div contains all the central content*/}
        <h3>Popular posts</h3>
        <Sortbar />
        <div id="posts">
          This div is for our content, including votes and comments
        </div>
      </div>
      <div id="sidebar">Sidebar content</div>
      {/*this div contains all the sidebar content*/}
    </div>
  );
};

export default Popular;
