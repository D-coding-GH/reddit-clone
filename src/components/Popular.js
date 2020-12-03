import React from "react";
import Sortbar from "./Sortbar";
import Sidebar from './Sidebar'
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
       <Sidebar/>
      {/*this div contains all the sidebar content*/}
    </div>
  );
};

export default Popular;
