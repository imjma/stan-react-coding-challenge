import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import _ from "lodash";

import Entrie from "./Entrie";

class List extends Component {
  renderEntries() {
    const { entries } = this.props;
    return _.map(entries, function(value, key) {
      return <Entrie key={key} {...value} />;
    });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {this.renderEntries()}
        </Row>
      </Grid>
    );
  }
}

export default List;
