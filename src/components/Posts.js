import { React, useState } from "react";
import smile from "./images2/smiling-obama.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Posts = () => {
  const [votes1, setVotes1] = useState(22);
  const [u1Clicked, setU1Clicked] = useState(false);
  const [d1Clicked, setD1Clicked] = useState(false);
  const [input1, setInput1] = useState("");
  const [comments1, setComments1] = useState([
    "lmao",
    "I don't like this joke, I'm offended",
  ]);
  const changeHandler = (event) => {
    event.preventDefault();
    setInput1(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setComments1([...comments1, input1]);
    setInput1("");
  };
  const upVoteHandler = (event) => {
    if (!u1Clicked && d1Clicked) {
      setD1Clicked(false);
      let votes = votes1;
      setVotes1(votes + 1);
    } else if (!u1Clicked) {
      event.target.style = "color: orangered";
      setU1Clicked(true);
      setD1Clicked(false);
      let votes = votes1;
      setVotes1(votes + 1);
    }
  };
  const downVoteHandler = (event) => {
    if (!d1Clicked && u1Clicked) {
      setU1Clicked(false);
      let votes = votes1;
      setVotes1(votes - 1);
    } else if (!d1Clicked) {
      event.target.style = "color: indigo";
      setD1Clicked(true);
      setU1Clicked(false);
      let votes = votes1;
      setVotes1(votes - 1);
    }
  };
  return (
    <ul className="postsList">
      <li id="Post1">
        <div className="votesContainer">
          <FontAwesomeIcon icon={faArrowUp} onClick={upVoteHandler} />
          <div className="voteNumber">{votes1}</div>
          {/*we need to do some on click and state magic here*/}
          <FontAwesomeIcon icon={faArrowDown} onClick={downVoteHandler} />
        </div>
        <div className="postContainer">
          <div className="postSubReddit"> r/funny</div>
          <div className="postTitle">
            Obama's funny joke: Why did the chicken cross the road?
          </div>
          <p className="postContent">To get to the other side</p>
          <Comments
            comments={comments1}
            id="Post1"
            value={input1}
            onChange={changeHandler}
            onSubmit={submitHandler}
          />
        </div>
        <div className="postImageContainer">
          <img className="postImage" src={smile} alt="" />
        </div>
      </li>

      {/*
      <PostsCard
        id="Post2"
        image=""
        sub="r/AskReddit"
        title="title 2"
        comments={["dummy comment3", "dummy comment 4"]}
      /> */}
    </ul>
  );
};
const Comments = (props) => {
  let i = 0;

  const commentList = props.comments;
  const commentDisplay = commentList.map((comment) => {
    i++;
    return (
      <li key={`${props.id}${i}`} className={`comment`}>
        {comment}
      </li>
    );
  });
  return (
    <div id={`${props.id}Comments`}>
      <ul className="commentList">
        <li className="commentHeading">Comments:</li>
        {commentDisplay}
      </ul>

      <CommentBox
        onSubmit={props.onSubmit}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

const CommentBox = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        key="commentAdd1"
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  );
};

export default Posts;
