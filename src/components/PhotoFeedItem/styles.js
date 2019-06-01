import styled from "styled-components";

export const Item = styled.div`
  margin-top: 10px;
  vertical-align: middle;
  width: 100%;
`;

export const ItemHiddenImg = styled.img`
  width: 100%;
  visibility: hidden;
`;

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
`;

export const ItemTopButtons = styled.div`
  display: flex;
  min-width: 155px;
  height: 52px;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
`;
