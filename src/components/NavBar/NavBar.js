import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img width={"50px"} src="https://i.ibb.co/zGTWS3V/d465b5a0d1b1465b88f32c948ed9eb83.png" alt="" />
          <Navbar.Brand className="fs-3 ms-0 ms-lg-3" href="#home">Learning Buzz</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-white fw-semibold ms-5 text-decoration-none" to='/courses'>Courses</Link>
              <Link className="text-white fw-semibold text-decoration-none ms-4" to='/faq'>FAQ</Link>
              <Link className="text-white fw-semibold text-decoration-none ms-4" to='/blog'>Blog</Link>
            </Nav>
            <Nav className="me-5">
              <Link className="text-white fw-semibold text-decoration-none me-5" to='/login' href="#memes">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
