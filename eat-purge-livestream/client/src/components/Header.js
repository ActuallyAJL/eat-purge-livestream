import React, { useEffect, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";
import { getLoggedInUser } from "../modules/userManager";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isLoggedIn) {
      getLoggedInUser();
    }
  }, [isLoggedIn]);

  const navArr = [
    <>
      <NavItem>
        <NavLink tag={RRNavLink} to="/">
          Home
        </NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink tag={RRNavLink} to="uploadImage">
          Upload Image
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="viewImage">
          View Image
        </NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink tag={RRNavLink} to="accountDetails">
          Account Details
        </NavLink>
      </NavItem>
    </>,
    <>
      <NavItem>
        <NavLink tag={RRNavLink} to="/">
          Home
        </NavLink>
      </NavItem>
    </>,
  ];

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Eat, Purge, Livestream
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn ? navArr[0] : navArr[1]}
          </Nav>
          <Nav navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
