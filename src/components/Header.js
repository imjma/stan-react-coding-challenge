import React, { Component } from "react";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">DEMO Streaming</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Log In
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Button bsStyle="primary">Start your free trial</Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
