import React from "react";

const Sortbar = () => {
  return (
    <div id="sortBar">
      <div>Hot</div>
      <RegionSelect />
      <div>New</div>
      <div>Top</div>
      <div>...</div>
      <div>display style dropdown here</div>
    </div>
  );
};
const RegionSelect = () => {
  return <div>A dropdown menu will go here eventually</div>;
};

export default Sortbar;
