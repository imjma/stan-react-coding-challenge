import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Social from "../components/Social";
import ErrorPage from "../components/ErrorPage";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/movies" component={Movies} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
          <Social />
        </div>
      </Router>
    );
  }
}

export default App;
