import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faCog, faSignal } from "@fortawesome/free-solid-svg-icons";
import "./Sortbar.css";
import { config } from "@fortawesome/fontawesome-svg-core";

const Sortbar = () => {
  return (
    <div className="sortBar">
      <div>
        <button id="hotButton">
          <FontAwesomeIcon icon={faBurn} id="faBurn"></FontAwesomeIcon> HOT
        </button>
      </div>
      <RegionSelect />
      <div>
        <button id="newButton">
          <FontAwesomeIcon icon={faCog} id="faCog"></FontAwesomeIcon>NEW
        </button>
      </div>
      <div>
        <button id="topButton">
          <FontAwesomeIcon icon={faSignal} id="faSignal"></FontAwesomeIcon>TOP
        </button>
      </div>
      <div>
        <button id="dotButton">...</button>
      </div>
      <div>
        <button id="dropButton"> ☰ </button>
      </div>
    </div>
  );
};

// const RegionSelect = () => {
//   return <div> dropdown </div>;
// };

class RegionSelect extends Component {
  dropdownContainer = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.dropdownContainer.current &&
      !this.dropdownContainer.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="dropDown">
        <section className="dropdownContainer" ref={this.dropdownContainer}>
          <button id="regButton" onClick={this.handleButtonClick}>
            United Kingdom
          </button>
          {this.state.open && (
            <div class="dropdownContainer">
              <li className="showmenuli"> EveryWhere</li>
              <li className="showmenuli"> United States</li>
              <li className="showmenuli"> Argentina</li>
              <li className="showmenuli"> Australia</li>
              <li className="showmenuli"> Bulgaria</li>
              <li className="showmenuli"> Canada</li>
              <li className="showmenuli"> Chile</li>
              <li className="showmenuli"> Colombia</li>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Sortbar;
