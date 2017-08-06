import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

import placeholder from "../assets/placeholder.png";

class Tile extends Component {
  render() {
    const { link, title, images } = this.props;
    let backgroundImage = _.get(images, "Poster Art.url", placeholder);

    var placeholderStyle = {
      width: "100%",
      height: "200px",
      backgroundColor: "#000",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      verticalAlign: "middle",
    };

    const imageNode = (
      <div style={placeholderStyle}>
        {link || ""}
      </div>
    );

    let linkNode = imageNode;
    if (link) {
      linkNode = (
        <Link to={`${link}`}>
          {imageNode}
        </Link>
      );
    }

    return (
      <Col xs={4} md={2}>
        {linkNode}
        {title}
      </Col>
    );
  }
}

export default Tile;
