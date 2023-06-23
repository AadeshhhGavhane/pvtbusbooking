import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useAuth0 } from "@auth0/auth0-react";
import {Links} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [click, setClick] = useState(false);

  const handleClick=()=>{
    setClick(!click);
  }

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
          
          <div className="menu-icon" onClick={handleClick} color="white">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* <p>helo</p> */}
          </div>
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
          {isAuthenticated && (
            <NavLink to="/myprofile" activeStyle>
              My Profile
            </NavLink>
          )}
        </NavMenu>
        {isAuthenticated ? (
          <NavBtn>
            <NavBtnLink
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </NavBtnLink>
          </NavBtn>
        ) : (
          <NavBtn>
            <NavBtnLink onClick={() => loginWithRedirect()}>
              Log In/Register
            </NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
