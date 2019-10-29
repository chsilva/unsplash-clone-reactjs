import React, { Component, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Spinner } from "../Icons"
import { Container } from "./styles"

import PhotoFeedItem from "../PhotoFeedItem"

const PhotoFeed = (props) => {
  const { loading, photos, loadMore, hasMore, threshold, classname, columnCount } = props
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

export default PhotoFeed
