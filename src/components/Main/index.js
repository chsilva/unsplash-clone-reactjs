import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../Header";

import Routes from "../Routes";

const Main = ({ menus, session }) => {
  return (
    <>
      <Header />
      <div className="container flex-column">
        {/* <TopBar /> */}
        <Routes menus={menus} session={session} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  menus: state.menus,
  session: state.session
});

export default withRouter(connect(mapStateToProps)(Main));
