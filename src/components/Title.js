import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Title extends Component {
  render() {
    const { name } = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {name}
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Title;
