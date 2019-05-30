import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 62px;
`;

export const HeaderSearchInput = styled.input`
  border: none;
  background: #eee;
  :hover {
    border: 1px solid #999;
    background: #fff;
  }
  :focus {
    border: 1px solid #999;
    background: #fff;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
