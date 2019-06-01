import React, { useState, useEffect } from "react";
import { Spinner } from "../../components/Icons";
import HomeService from "../../services/home";
import PhotoFeed from "../../components/PhotoFeed";

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
    <PhotoFeed
      loadMore={loadMore}
      hasMore={state.hasMore}
      loader={<Spinner size="2x" key={0} />}
      threshold={1000}
      photos={state.data.photos}
    />
  );
};

export default Home;
