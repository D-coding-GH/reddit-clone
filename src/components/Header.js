import React from "react";
import "./Header.css";
import redditLogo from "../images/redditLogo.svg";
const Header = () => {
  return (
    <header>
      <div id="logoCont">
        {/*logo container holds logo and text*/}
        <object id="logo" data={redditLogo} type="image/svg+xml">
          Reddit logo
        </object>
        <p>reddit</p>
      </div>
      <input id="searchBar" type="text" placeholder="Search"></input>
      {/*search bar input goes nowhere */}
      <div id="loginCont">
        {" "}
        {/*holds */}
        <button id="logIn">LOG IN</button>
        <button id="signUp">SIGN UP</button>
      </div>
    </header>
  );
};

export default Header;
