import React from "react";
import AddCollectionButton from "../AddCollectionButton";
import LikeButton from "../LikeButton";
import { Heart, Plus } from "../Icons";
import { Item, ItemHiddenImg, ItemOverlay, ItemTopButtons } from "./styles";

const PhotoFeedItem = props => {
  return (
    <Item
      {...props}
      style={{
        backgroundImage: `url(${props.photo.urls.regular})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <ItemOverlay>
        <ItemTopButtons>
          <LikeButton>
            <Heart customClass="red" />
            <span>{props.photo.likes}</span>
          </LikeButton>
          <AddCollectionButton>
            <Plus customClass="gray" />
            <span>Collect</span>
          </AddCollectionButton>
        </ItemTopButtons>
        <ItemHiddenImg
          src={props.photo.urls.regular}
          alt="unsplash https://unsplash.com"
        />
      </ItemOverlay>
    </Item>
  );
};

export default PhotoFeedItem;
