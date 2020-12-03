import React from "react";

const Posts = () => {
  return (
    <ul>
      <PostsCard image="" />
    </ul>
  );
};

const PostsCard = (props) => {
  return (
    <li className="postWrapper">
      <h1>hi</h1>
      <img src={props.image} alt="" />
    </li>
  );
};
export default Posts;
