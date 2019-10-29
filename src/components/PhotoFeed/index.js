import React, { Component, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Spinner } from "../Icons"
import { Container } from "./styles"

import PhotoFeedItem from "../PhotoFeedItem"

class PhotoFeed extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props, columnCount: this.getColumnCount() }
  }

  getColumnCount() {
    const ww = window.innerWidth
    if (ww >= 1024) {
      return 3
    } else if (ww >= 600) {
      return 2
    } else {
      return 1
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize, true)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    const columnCount = this.getColumnCount()
    this.setState({ ...this.state, columnCount })
  }

  render() {
    const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = this.state

    if (!loading) {
      let row = []

      row = photos.map((photo, i) => <PhotoFeedItem key={i} alt="placeholder" photo={photo} />)

      return (
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<Spinner size="2x" key={0} />}
          threshold={threshold}
          className={classname}
        >
          <Container columnCount={columnCount}>{row}</Container>
        </InfiniteScroll>
      )
    } else {
      return (
        <>
          <Container>
            <Spinner size="2x" />
          </Container>
        </>
      )
    }
  }
}

export default PhotoFeed
