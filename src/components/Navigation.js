import React from "react";
import  {Link} from "react-router-dom"
import  {Navbar, Nav} from "react-bootstrap"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark"  expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link"  to="/">Home</Link>
          <Link className="nav-link"  to="/contador">Contador</Link>
          <Link className="nav-link"  to="/crudhooks">Crud Hooks</Link>
          <Link className="nav-link"  to="/crudhooks2">Crud 2</Link>
          <Link className="nav-link"  to="/crudhooks3">Crud 3</Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
