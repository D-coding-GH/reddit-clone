import React from "react";
import './Sortbar.css'

const Sortbar = () => {
  return (
    <div id="sortBar">
      <div>
      <button id="hotButton">HOT</button>
      </div>
      <RegionSelect />
      <div>
      <button id="newButton">NEW</button>
      </div>
      <div>
      <button  id="topButton">TOP</button>
      </div>
      <div>
      <button  id="...button">...</button>
      </div>
      <div>
      <button id="dropButton">dropdown</button>
      </div>
    </div>
  );
};
const RegionSelect = () => {
  return <div>A dropdown menu will go here eventually</div>;
};

export default Sortbar;
