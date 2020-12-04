import React from "react";
import smile from "./images2/smiling-obama.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Posts = () => {
  return (
    <ul className="postsList">
      <PostsCard
        id="Post1"
        image={smile}
        sub="r/funny"
        title="Obama's funny joke: Why did the chicken cross the road?"
        content="To get to the other side"
        comments={["lmao", "I don't like this joke, I'm offended"]}
      />
      <PostsCard
        id="Post2"
        image=""
        sub="r/AskReddit"
        title="title 2"
        comments={["dummy comment3", "dummy comment 4"]}
      />
    </ul>
  );
};

const PostsCard = (props) => {
  return (
    <li>
      <div className="votesContainer">
        <FontAwesomeIcon icon={faArrowUp} />
        <div className="voteNumber">23</div>
        {/*we need to do some on click and state magic here*/}
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      <div className="postContainer">
        <div className="postSubReddit"> {props.sub}</div>
        <div className="postTitle">{props.title}</div>
        <p className="postContent">{props.content}</p>
        <Comments comments={props.comments} id={props.id} />
      </div>
      <div className="postImageContainer">
        <img className="postImage" src={props.image} alt="" />
      </div>
    </li>
  );
};

const Comments = (props) => {
  const commentList = props.comments;
  const commentDisplay = commentList.map((comment) => {
    return <li className={`comment${props.id}`}>{comment}</li>;
  });
  return <ul>{commentDisplay}</ul>;
};
export default Posts;
