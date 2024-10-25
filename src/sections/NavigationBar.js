import React from "react";
import logo from "../images/logo.png";
import "./navigationBar.css";

const NavigationBar = ({ onClick }) => {
  return (
    <div className="NavigationBar__overall-div">
      <img
        src={logo}
        alt="fighting-performance-logo"
        className="circular-logo"
      />
      <ul className="montserrat-bold hide-small-width">
        <li>
          <p className="flags">
            <a className="greek-flag" href="https://www.example.com">
              <span className="fi fi-gr"> </span>
            </a>
            <div className="divider" />
            <a className="uk-flag">
              <span className="fi fi-gb"></span>
            </a>
          </p>
        </li>
        <li>
          <p>about</p>
        </li>
        <li>
          <p>services</p>
        </li>
        <li>
          <p>schedule</p>
        </li>
        <li>
          <p>contact</p>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <i className="fa-solid fa-bars" onClick={onClick}></i>
    </div>
  );
};

export default NavigationBar;
