import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  renderLinks() {
    return (
      <ul>
        <li>Home |</li>
        <li>Terms and Conditions |</li>
        <li>Privacy Policy |</li>
        <li>Collection Statement |</li>
        <li>Help |</li>
        <li>Manage Account |</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderLinks()}
        <p>Copyright &copy; 2015 DEMO Streaming All Rights Reserved</p>
      </div>
    );
  }
}

export default Footer;
