import React from "react";
import mainLogo from "../images/main-logo.png";
import sloganForSmallWidths from "../images/small-width-slogan.png";
import sloganForBigWidths from "../images/slogan.png";
import "./mainSection.css";
import NavigationBar from "./NavigationBar";
import vid from "../images/vid2.mp4";

export default function MainSection({ onClick }) {
  return (
    <div className="MainSection__overall-div">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavigationBar onClick={onClick} />
      <div class="content">
        <div class="logo-div">
          <div class="inner-logo-div">
            <img
              class="main-logo"
              src={mainLogo}
              alt="fighting performance logo"
            />
            <p>Kick Boxing | Boxing | Muaythai | Fitness</p>
          </div>
        </div>
        <img
          class="sloganForBigWidths"
          src={sloganForBigWidths}
          alt="fight-performance-slogan-big-widths"
        />
        <img
          class="sloganForSmallWidths"
          src={sloganForSmallWidths}
          alt="fight-performance-slogan-small-widths"
        />
      </div>
    </div>
  );
}
