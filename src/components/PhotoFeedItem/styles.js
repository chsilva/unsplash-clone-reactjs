import styled from "styled-components"

export const Item = styled.figure`
  width: 100%;
  margin-bottom: 18px;

  img {
    width: 100%;
    height: auto;
    transition: all 0.15s;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    &:hover {
      cursor: zoom-in;
      filter: brightness(50%);
    }
  }
`

export const ItemOverlay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  :hover {
    cursor: zoom-in;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  :active {
    cursor: zoom-in;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`

export const ItemTopButtons = styled.div`
  display: flex;
  min-width: 155px;
  height: 52px;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
  margin-right: 11px;
`

export const ItemBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  align-items: center;
  justify-content: space-between;
  margin-top: -52px; /* TODO: fix this */
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
