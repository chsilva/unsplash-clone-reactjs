import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Spinner } from "../../components/Icons";
import HomeService from "../../services/home";
import {
  UnsplashHomeContainer,
  UnsplashHomeColumn,
  UnsplashHomeItem
} from "./styles";

const Home = () => {
  const initialHomeState = {
    data: { photos: [] },
    page: 1,
    loading: true,
    hasMore: true
  };

  const [state, setState] = useState(initialHomeState);

  useEffect(() => {
    const getPhotos = async () => {
      const { data } = await HomeService.getPhotos({ page: state.page });
      const { photos } = state.data;

      setState({
        data: { photos: photos.concat(data) },
        page: 1,
        loading: false,
        hasMore: true
      });
    };

    getPhotos();
    // I had to disable this rule because the useEffect function
    // was entering an infinite loop when I added the parameter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state.loading) {
    let row = [];
    const columns = [[], [], []];

    state.data.photos.map((photo, i) => {
      columns[i % 3].push(
        <UnsplashHomeItem key={i} alt="placeholder" src={photo.urls.regular} />
      );
    });

    row = columns.map((column, i) => (
      <UnsplashHomeColumn key={i}>
        {column.map(item => item)}
      </UnsplashHomeColumn>
    ));

    const loadMore = () => {
      const nextPage = state.page + 1;
      HomeService.getPhotos({ page: nextPage })
        .then(({ data }) => {
          setState({
            data: { photos: state.data.photos.concat(data) },
            page: state.page + 1,
            loading: false,
            hasMore: true
          });
        })
        .catch(err => console.log(err));
    };

    return (
      <>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={state.hasMore}
          loader={<Spinner size="2x" key={0} />}
          threshold={1000}
        >
          <UnsplashHomeContainer>{row}</UnsplashHomeContainer>
        </InfiniteScroll>
      </>
    );
  } else {
    return (
      <>
        <UnsplashHomeContainer>
          <Spinner size="2x" />
        </UnsplashHomeContainer>
      </>
    );
  }
};

export default Home;
