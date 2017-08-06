import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Page from "./Page";

import * as seriesActions from "../redux/actions/Series";

class Series extends Component {
  componentDidMount() {
    const { fetchSeries } = this.props.seriesActions;
    fetchSeries();
  }

  render() {
    const { entries } = this.props.seriesStore;

    return <Page entries={entries} title="Series" />;
  }
}

const mapStateToProps = state => {
  return {
    seriesStore: state.$$seriesStore.toJS(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    seriesActions: bindActionCreators(seriesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
