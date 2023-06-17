import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ loggedIn }) => {

  
  return (
    <>
        <Nav>
          <NavLink to="/">
            {/* <img
              src={require("https://raw.githubusercontent.com/briancodex/react-navbar-v3/642eefd7f46c977087898c4ba0a3dc5564dd301c/src/images/logo.svg")}
              alt="logo"
            /> */}
            <h1>Home</h1>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/policy" activeStyle>
              Policy
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact Us
            </NavLink>
            <NavLink to="/faqs" activeStyle>
              FAQs
            </NavLink>
            <NavLink to="/signup" activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;
