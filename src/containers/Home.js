import React, { Component } from "react";

import Title from "../components/Title";
import List from "../components/List";

class Home extends Component {
  render() {
    let entries = [
      {
        title: "Popular Series",
        link: "series",
      },
      {
        title: "Popular Movies",
        link: "movies",
      },
    ];

    return (
      <div>
        <Title name="Popular Titles" />
        <List entries={entries} />
      </div>
    );
  }
}

export default Home;
