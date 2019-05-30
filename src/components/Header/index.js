import React from "react";
import { Logo } from "../Logo";
import {
  HeaderContainer,
  HeaderSearchInput,
  HeaderNav,
  HeaderProfile
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderSearchInput type="text" />
      <HeaderNav>
        <a>Home</a>
        <a>Collections</a>
      </HeaderNav>
      <HeaderProfile>profile</HeaderProfile>
    </HeaderContainer>
  );
};

export default Header;
