import React from "react";
import "./Trending.css";

class Trending extends React.Component {
  ///...danny version
  render() {
    return (
      <div>
        <div className="trendingContainer">
          <div id="card1" className="card-wrapper">
            <Card
              headline="Vaccine Roll-Out expected in weeks"
              topic=" international news and more &amp; corona"
            />
          </div>

          <div id="card2" className="card-wrapper">
            <Card
              headline="Hamilton replaced for next F1"
              topic="sports and more"
            />
          </div>

          <div id="card3" className="card-wrapper">
            <Card
              headline="PC building walk through"
              topic="tech news and more &amp; TECH"
            />
          </div>

          <div id="card4" className="card-wrapper">
            <Card
              headline="Trump still wont leave"
              topic="USA and more &amp; politics"
            />
          </div>
        </div>
      </div>
    );
  }
}
const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt="" className="photo1" />
      <h3 className="trendingHeadline">{props.headline}</h3>
      <h4 className="trendingTopics">{props.topic.toUpperCase()}</h4>
    </div>
  );
};

export default Trending;
