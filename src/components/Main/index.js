import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import Header from "../Header"

import Routes from "../Routes"

const Main = ({ menus, session }) => {
  return (
    <>
      <Header />
      <Routes menus={menus} session={session} />
    </>
  )
}

const mapStateToProps = (state) => ({})

export default withRouter(connect(mapStateToProps)(Main))
