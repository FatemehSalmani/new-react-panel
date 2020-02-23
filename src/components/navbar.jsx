import React from 'react';
import {Navbar,NavbarBrand,Nav} from 'react-bootstrap';
import {NavLink , withRouter} from "react-router-dom";

function navbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <NavbarBrand href="/" >New React Panel</NavbarBrand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink exact to="/articles" className="nav-link" activeClassName="active">Articles</NavLink>
        <NavLink exact to="/about-us" className="nav-link" activeClassName="active">About Us</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default withRouter(navbar) ;
