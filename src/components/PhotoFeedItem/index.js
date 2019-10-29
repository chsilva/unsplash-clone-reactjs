import React from "react"
import AddCollectionButton from "../AddCollectionButton"
import DownloadButton from "../DownloadButton"
import LikeButton from "../LikeButton"
import { Heart, Plus } from "../Icons"
import {
  Item,
  ItemOverlay,
  ItemTopButtons,
  ItemBottomContainer,
  ItemUser,
  ItemUserProfilePicture,
  ItemUserProfileName,
} from "./styles"

const PhotoFeedItem = (props) => {
  return (
    <Item {...props}>
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

      <ItemBottomContainer>
        <ItemUser>
          <ItemUserProfilePicture src={props.photo.user.profile_image.medium} alt={props.photo.alt_description} />
          <ItemUserProfileName>{props.photo.user.name}</ItemUserProfileName>
        </ItemUser>
        <DownloadButton download={props.photo.links.download} />
      </ItemBottomContainer>
      <img loading="lazy" src={props.photo.urls.regular} alt="" />
    </Item>
  )
}

export default PhotoFeedItem
