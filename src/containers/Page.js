import React, { Component } from "react";
import { connect } from "react-redux";

import Title from "../components/Title";
import List from "../components/List";
import Loading from "../components/Loading";

class Page extends Component {
  isLoading() {
    const { appStore } = this.props;
    return appStore.loading;
  }

  render() {
    const { entries, title } = this.props;
    if (this.isLoading()) {
      return <Loading />;
    }
    return (
      <div>
        <Title name={`Popular ${title}`} />
        <List entries={entries} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appStore: state.$$appStore.toJS(),
  };
};

export default connect(mapStateToProps)(Page);
