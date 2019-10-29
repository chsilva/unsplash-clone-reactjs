import styled from "styled-components"

export const Item = styled.figure`
  width: 100%;
  margin-bottom: 18px;
  position: relative;

  > img {
    width: 100%;
    height: auto;
    transition: all 0.1s;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  &:hover {
    img {
      cursor: zoom-in;
      filter: brightness(80%);
    }

    div {
      display: flex;
    }
  }
`

export const ItemTopButtons = styled.div`
  display: none;
  min-width: 155px;
  height: 52px;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
  margin-right: 11px;
  position: absolute;
  z-index: 9;
  right: 0;
`

export const ItemBottomContainer = styled.div`
  height: 52px;
  width: 100%;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 9;
  bottom: 0;
  margin-bottom: 5px;
`

export const ItemUser = styled.div`
  display: flex;
  flex-direction: row;
`

export const ItemUserProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 16px;
`
export const ItemUserProfileName = styled.span`
  display: flex;
  align-self: center;
  margin-left: 16px;
  text-align: left;
  color: #eee;
  font-weight: 800;
`
