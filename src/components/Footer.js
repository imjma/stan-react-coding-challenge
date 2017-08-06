import React, { Component } from "react";
import "./Footer.css";

// import Social from "./Social";
import Facebook from "../assets/social/facebook-white.svg";
import Twitter from "../assets/social/twitter-white.svg";
import Instagram from "../assets/social/instagram-white.svg";

import Appstore from "../assets/store/app-store.svg";
import Playstore from "../assets/store/play-store.svg";
import Windowsstore from "../assets/store/windows-store.svg";

class Footer extends Component {
  renderLinks() {
    return (
      <ul>
        <li>Home |</li>
        <li>Terms and Conditions |</li>
        <li>Privacy Policy |</li>
        <li>Collection Statement |</li>
        <li>Help |</li>
        <li>Manage Account</li>
      </ul>
    );
  }

  render() {
    return (
      <footer className="footer">
        {this.renderLinks()}
        <p>Copyright &copy; 2015 DEMO Streaming All Rights Reserved</p>
        <div className="external-links">
          <ul className="social">
            <li>
              <img src={Facebook} alt="Facebook" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram" />
            </li>
          </ul>
          <ul className="store">
            <li>
              <img src={Appstore} alt="Apple Store" />
            </li>
            <li>
              <img src={Playstore} alt="Play Store" />
            </li>
            <li>
              <img src={Windowsstore} alt="Windows Store" />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
