import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000000;
`;
const Logo = styled.div``;
const NavLogo = styled(NavLink)`
  color: #ff7a00;
  text-decoration: none;
  font-size: 25px;
  box-shadow: 0px 0px 10px 0px #ff7a00;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 65px;
`;
const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
`;
const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-style: italic;
  &.active {
    color: #ff7a00;
  }
`;
const Button = styled(NavLink)`
  font-size: 18px;

  font-weight: 400;
  text-decoration: none;
  color: #ffffff;
  align-items: center;
  background-color: #ff7a00;
  padding: 3px 12px;
  border: 1px solid #ff7a00;
  border-radius: 40px;
  box-shadow: 0px 0px 15px 0px #ff7a00;
  font-style: italic;
  &:hover {
    background-color: transparent;
    transition: all ease-in-out 0.3s;
    color: #ff7a00;
  }
`;
const NavBar = () => {
  return (
    <Header>
      <Logo>
        <NavLogo to={"/"}>X</NavLogo>
      </Logo>
      <Ul>
        <ListItem>
          <NavItem to={"/"} activeclassname="active">
            Home
          </NavItem>
        </ListItem>
        <ListItem>
          <NavItem to={"/about"} activeclassname="active">
            About
          </NavItem>
        </ListItem>
        <ListItem>
          <NavItem to={"/artwork"} activeclassname="active">
            Artwork
          </NavItem>
        </ListItem>
        <ListItem>
          <NavItem to={"/collection"} activeclassname="active">
            Collection
          </NavItem>
        </ListItem>
        <ListItem>
          <NavItem to={"/artist"} activeclassname="active">
            Artist
          </NavItem>
        </ListItem>
      </Ul>
      <Button>Login</Button>
    </Header>
  );
};
export default NavBar;
