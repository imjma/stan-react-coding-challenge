import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Page from "./Page";

import * as moviesActions from "../redux/actions/Movies";

class Movies extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props.moviesActions;
    fetchMovies();
  }

  render() {
    const { entries } = this.props.moviesStore;

    return <Page entries={entries} title="Movies" />;
  }
}

const mapStateToProps = state => {
  return {
    moviesStore: state.$$moviesStore.toJS(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesActions: bindActionCreators(moviesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
