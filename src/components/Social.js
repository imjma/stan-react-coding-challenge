import React, { Component } from "react";

import "./Social.css";
import Facebook from "../assets/social/facebook-blue.svg";
import Twitter from "../assets/social/twitter-blue.svg";
import Instagram from "../assets/social/instagram-blue.svg";

import Appstore from "../assets/store/app-store.svg";
import Playstore from "../assets/store/play-store.svg";
import Windowsstore from "../assets/store/windows-store.svg";

class Social extends Component {
  render() {
    return (
      <div>
        <div className="social">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
        </div>
        <div className="store">
          <img src={Appstore} alt="Apple Store" />
          <img src={Playstore} alt="Play Store" />
          <img src={Windowsstore} alt="Windows Store" />
        </div>
      </div>
    );
  }
}

export default Social;
