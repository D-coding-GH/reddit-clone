import React from "react";
import { Component } from "react";
import './Sortbar.css'

const Sortbar = () => {
  return (
    <div className = "sortBar">
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
      <button  id="dotButton">...</button>
      </div>
      <div>
      <button id="dropButton"> ☰</button>
      </div>
    </div>
 
 );
}; 
  

// const RegionSelect = () => {
//   return <div> dropdown </div>;
// };


class RegionSelect extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div >
        <div className = "container" ref={this.container}>
          <button id="regButton"  onClick={this.handleButtonClick}>
            United Kingdom
          </button>
          {this.state.open && (
            <div class = "container">
            <li className ="showmenuli"  > menu item 1</li>
            <li   className ="showmenuli" > menu item 2</li>
            <li  className ="showmenuli" > menu item 3</li>
            <li className ="showmenuli"  >  menu item 4</li>
          </div>
          )}
        </div>
      </div>
    );
  }
}


export default Sortbar;
