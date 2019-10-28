import React, { useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Spinner } from "../Icons"
import { Container } from "./styles"

import PhotoFeedItem from "../PhotoFeedItem"

const PhotoFeed = props => {
  const [state] = useState({ ...props })

  if (!state.loading) {
    let row = []

    row = props.photos.map((photo, i) => <PhotoFeedItem key={i} alt="placeholder" photo={photo} />)

    return (
      <InfiniteScroll
        loadMore={props.loadMore}
        hasMore={props.hasMore}
        loader={<Spinner size="2x" key={0} />}
        threshold={props.threshold}
        className={props.classname}
      >
        <Container>{row}</Container>
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
