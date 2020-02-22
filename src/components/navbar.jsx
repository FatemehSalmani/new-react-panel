import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import {NavLink , withRouter} from "react-router-dom";


function navbar(location) {
  return (
    <Navbar color="light" light expand="md">
       <NavbarBrand href="/">new react panel</NavbarBrand>
       <Collapse isOpen={true} navbar>
        <Nav className="ml-auto" navbar>
       <NavItem>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/articles"
              className="nav-link"
              activeClassName="active"
            >
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/about-us"
              className="nav-link"
              activeClassName="active"
            >
            About Us
            </NavLink>
          </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
    
  );
}

export default withRouter(navbar) ;
