import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Bell } from "../Icons";
import {
  HeaderContainer,
  HeaderLogoWrap,
  HeaderSearchInput,
  HeaderNav,
  HeaderUserInfo,
  HeaderAvatar
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer className="shadowed">
      <HeaderLogoWrap>
        <Logo />
      </HeaderLogoWrap>
      <HeaderSearchInput type="text" placeholder="Search photos..." />
      <HeaderNav>
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
      </HeaderNav>
      <HeaderUserInfo>
        <Bell customClass="icon__1-5" />
        <HeaderAvatar
          alt="avatar"
          src="https://images.unsplash.com/profile-fb-1448295384-79c82d77c0b2.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        />
      </HeaderUserInfo>
    </HeaderContainer>
  );
};

export default Header;
