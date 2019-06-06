import React from "react";
import SearchPhotos from "../../components/Search/Photos";

const Search = props => {
  const { type, query } = props.match.params;

  switch (type) {
    case "photos":
      return <SearchPhotos />;
    // case "collections":
    //   return <div style={{ paddingTop: `100px` }}>{`${type} - ${query}`}</div>;
    // case "users":
    //   return <div style={{ paddingTop: `100px` }}>{`${type} - ${query}`}</div>;
    default:
      return <div style={{ paddingTop: `100px` }}>BUSCA INCORRETA</div>;
  }
};

export default Search;
